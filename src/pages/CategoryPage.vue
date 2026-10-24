<template>
  <main class="category-page">
    <p v-if="loading">Gerichte werden geladen ...</p>

    <p v-else-if="error">{{ error }}</p>

    <template v-else-if="category">
      <header class="category-header">
        <span lang="ar" dir="rtl">
          {{ category.nameAr }}
        </span>

        <h1>{{ category.name }}</h1>
        <p>{{ category.description }}</p>
      </header>

      <div class="dishes-grid">
        <article
          v-for="dish in dishes"
          :key="dish._id"
          class="dish-card"
        >
          <img
            v-if="dish.image"
            :src="imageUrl(dish.image)"
            :alt="dish.name"
            loading="lazy"
          />

          <h2>{{ dish.name }}</h2>
          <p>{{ dish.description }}</p>

          <span v-if="dish.price != null">
            {{ dish.price.toFixed(2) }} €
          </span>
        </article>
      </div>

      <p v-if="!dishes.length">
        Für diese Kategorie sind noch keine Gerichte eingetragen.
      </p>
    </template>
  </main>
</template>


<script setup>
import { ref, watch } from 'vue'
import { sanity, urlFor } from '../services/sanity'

const props = defineProps({
  slug: {
    type: String,
    required: true
  }
})

const category = ref(null)
const dishes = ref([])
const loading = ref(true)
const error = ref('')

async function loadCategory(slug) {
  loading.value = true
  error.value = ''
  category.value = null
  dishes.value = []

  try {
    const query = `
      *[_type == "category" && slug.current == $slug][0] {
        _id,
        name,
        nameAr,
        description,
        image
      }
    `

    const result = await sanity.fetch(query, { slug })

    if (!result) {
      error.value = 'Kategorie nicht gefunden.'
      return
    }

    category.value = result

    dishes.value = await sanity.fetch(
      `*[
        _type == "dish" &&
        category._ref == $categoryId &&
        available == true
      ] | order(order asc, name asc) {
        _id,
        name,
        nameAr,
        description,
        image,
        price
      }`,
      { categoryId: result._id }
    )
  } catch (err) {
    console.error(err)
    error.value = 'Inhalte konnten nicht geladen werden.'
  } finally {
    loading.value = false
  }
}

watch(
  () => props.slug,
  loadCategory,
  { immediate: true }
)

function imageUrl(image) {
  return image?.asset
    ? urlFor(image).width(700).auto('format').url()
    : ''
}
</script>


<style scoped>
.category-page {
  min-height: 100vh;
  padding: 150px 6% 90px;
  background: #f7f0e3;
  color: #06483e;
}

.category-header {
  text-align: center;
  margin-bottom: 50px;
}

.category-header span {
  font-family: 'Amiri', serif;
  font-size: 30px;
  color: #b58b50;
}

.category-header h1 {
  font-family: Georgia, serif;
  font-size: clamp(40px, 5vw, 65px);
  font-weight: 400;
}

.dishes-grid {
  display: grid;
  grid-template-columns: repeat(
    3,
    minmax(0, 1fr)
  );
  gap: 25px;
  max-width: 1250px;
  margin: auto;
}

.dish-card {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  padding-bottom: 25px;
}

.dish-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.dish-card h2,
.dish-card p,
.dish-card span {
  display: block;
  margin: 15px 20px;
}

@media (max-width: 900px) {
  .dishes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .dishes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
