<template>
  <section id="menu" class="menu-section">
    <div class="menu-container">
      <header class="menu-header">
        <div class="header-ornament" aria-hidden="true">
          <span></span>
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"/>
            <path d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"/>
            <path d="M32 23V41M23 32H41"/>
          </svg>
          <span></span>
        </div>

        <span lang="ar" dir="rtl" class="arabic">
          قائمة الطعام
        </span>

        <h2>Unsere Speisekarte</h2>

        <!-- <div class="gold-line"></div> -->

      </header>

      <p v-if="loading" class="menu-message">
        Speisekarte wird geladen ...
      </p>

      <p v-else-if="error" class="menu-message" role="alert">
        {{ error }}
      </p>

      <p v-else-if="!categories.length" class="menu-message">
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
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding: 100px 5% 120px;
  color: #fff8eb;
  scroll-margin-top: 80px;
  background:
    radial-gradient(ellipse at 50% 35%, #0b594b 0%, #032f29 85%);
}

/* Subtle ornamental atmosphere */
.menu-section::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.12;
  pointer-events: none;
  background-image:
    repeating-conic-gradient(
      from 45deg,
      transparent 0deg 42deg,
      rgba(214, 180, 120, .35) 44deg 46deg,
      transparent 48deg 90deg
    );
  background-size: 90px 90px;
  mask-image: radial-gradient(
    ellipse at center,
    transparent 15%,
    black 100%
  );
}

.menu-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Heading */
.menu-header {
  max-width: 750px;
  margin: 0 auto 65px;
  text-align: center;
}

.header-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
  color: #d6b478;
}

.header-ornament > span {
  width: 75px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    #d6b478
  );
}

.header-ornament > span:last-child {
  transform: rotate(180deg);
}

.header-ornament svg {
  width: 45px;
  height: 45px;
  stroke: currentColor;
  stroke-width: 1.3;
}

.arabic {
  display: block;
  font-family: 'Amiri', serif;
  font-size: 2.5rem;
  line-height: 1.4;
  color: #d6b478;
}

.menu-header h2 {
  margin: 4px 0 18px;
  font-family: Georgia, serif;
  font-size: clamp(2.7rem, 4.5vw, 4.8rem);
  font-weight: 400;
  line-height: 1.15;
}

.gold-line {
  width: 90px;
  height: 1px;
  margin: 0 auto 20px;
  background: #d6b478;
}

.menu-header p {
  margin: 0;
  font-family: Georgia, serif;
  font-size: clamp(15px, 1.5vw, 19px);
  color: #e8d9c3;
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
