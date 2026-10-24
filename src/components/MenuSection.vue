<template>
  <section id="menu" class="menu-section">
    <div class="menu-container">
      <header class="menu-header">
        <span lang="ar" dir="rtl" class="arabic">
          قائمة الطعام
        </span>

        <h2>Unsere Speisekarte</h2>
        <div class="gold-line"></div>
      </header>

      <p v-if="loading" class="menu-message">
        Speisekarte wird geladen ...
      </p>

      <p v-else-if="error" class="menu-message" role="alert">
        {{ error }}
      </p>

      <p
        v-else-if="!categories.length"
        class="menu-message"
      >
        Unsere Speisekarte folgt in Kürze.
      </p>


      <div v-else class="category-grid">
        <RouterLink
          v-for="category in categories"
          :key="category._id"
          :to="{
            name: 'category',
            params: { slug: category.slug }
          }"
          class="category-card"
        >
          <div class="card-image">
            <img
              v-if="category.image"
              :src="imageUrl(category.image)"
              :alt="category.name"
              loading="lazy"
            />
          </div>

          <div class="card-content">
            <h3>{{ category.name }}</h3>

            <span
              v-if="category.nameAr"
              class="card-arabic"
              lang="ar"
              dir="rtl"
            >
              {{ category.nameAr }}
            </span>

            <p>{{ category.description }}</p>

            <span class="card-arrow">
              <ArrowRight :size="21" />
            </span>
          </div>
        </RouterLink>
      </div>

    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { sanity, urlFor } from '../services/sanity'

const categories = ref([])
const loading = ref(true)
const error = ref('')

const query = `
  *[_type == "category" && defined(slug.current)]
  | order(order asc, name asc) {
    _id,
    name,
    nameAr,
    description,
    "slug": slug.current,
    image
  }
`

onMounted(async () => {
  try {
    categories.value = await sanity.fetch(query)
  } catch (err) {
    console.error('Sanity Fehler:', err)
    error.value = 'Die Speisekarte konnte nicht geladen werden.'
  } finally {
    loading.value = false
  }
})

function imageUrl(image) {
  if (!image?.asset) return ''
  return urlFor(image)
    .width(700)
    .height(550)
    .fit('crop')
    .auto('format')
    .url()
}
</script>


<style scoped>
.menu-section {
  background:
    radial-gradient(
      ellipse at 50% 30%,
      #0b594b,
      #032f29 85%
    );
  padding: 95px 5% 110px;
  color: #fff8eb;
  scroll-margin-top: 80px;
}

.menu-container {
  max-width: 1350px;
  margin: auto;
}

.menu-header {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 45px;
}

.arabic {
  display: block;
  font-family: 'Amiri', serif;
  font-size: 2rem;
  color: #d6b478;
}

.menu-header h2 {
  font-family: Georgia, serif;
  font-weight: 400;
  font-size: clamp(2.5rem, 4vw, 4rem);
  margin: 5px 0 18px;
}

.gold-line {
  width: 45px;
  height: 2px;
  background: #d6b478;
  margin: 0 auto 20px;
}

.menu-header p {
  font-family: Georgia, serif;
  font-size: 17px;
  line-height: 1.6;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 15px;
}

.category-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  border-radius: 19px;
  border: 1px solid #cba66c;
  background: #f3e4ce;
  color: #172c26;
  text-decoration: none;
  transition: transform .3s ease, box-shadow .3s ease;
}

.category-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 15px 35px rgba(0,0,0,.25);
}

.card-image {
  height: 220px;
  background: #d6c1a0;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}

.category-card:hover img {
  transform: scale(1.06);
}

.card-content {
  position: relative;
  z-index: 1;
  flex: 1;
  margin-top: -20px;
  padding: 25px 15px 20px;
  background: #f3e4ce;
  border-radius: 45% 45% 0 0 / 25px 25px 0 0;
  text-align: center;
}

.card-content h3 {
  font-family: Georgia, serif;
  font-weight: 400;
  font-size: 21px;
  margin: 0;
}

.card-arabic {
  display: block;
  font-family: 'Amiri', serif;
  font-size: 20px;
  margin: 4px 0;
}

.card-content p {
  font-family: Georgia, serif;
  font-size: 14px;
  line-height: 1.5;
  min-height: 45px;
  margin: 12px 0;
}

.card-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #c9a36b;
  color: white;
}

.menu-message {
  text-align: center;
  padding: 30px;
}

/* Tablet */
@media (max-width: 991px) {
  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
}

/* Smartphone */
@media (max-width: 575px) {
  .menu-section {
    padding: 70px 6%;
  }

  .category-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: auto;
  }

  .card-image {
    height: 240px;
  }

  .menu-header p {
    font-size: 15px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .category-card,
  .card-image img {
    transition: none;
  }
}
</style>
