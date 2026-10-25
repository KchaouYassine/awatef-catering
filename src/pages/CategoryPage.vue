<template>
  <main class="category-page">
    <div v-if="loading" class="page-status">
      Speisekarte wird geladen ...
    </div>

    <div v-else-if="error" class="page-status" role="alert">
      <p>{{ error }}</p>

      <RouterLink
        :to="{ path: '/', hash: '#menu' }"
        class="status-link"
      >
        Zurück zur Speisekarte
      </RouterLink>
    </div>

    <template v-else-if="category">
      <!-- Decorative category hero -->
      <header class="category-hero">
        <div class="hero-pattern"></div>

        <div class="hero-content">
          <svg
            class="hero-ornament"
            viewBox="0 0 200 65"
            aria-hidden="true"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="1.3"
              stroke-linecap="round"
            >
              <path
                d="M100 56 C86 41 89 21 100 7
                   C111 21 114 41 100 56Z"
              />
              <path
                d="M100 56 C73 53 61 32 73 18
                   C87 12 92 31 81 36"
              />
              <path
                d="M100 56 C127 53 139 32 127 18
                   C113 12 108 31 119 36"
              />
              <path
                d="M73 31 C50 14 34 23 39 38
                   M127 31 C150 14 166 23 161 38"
              />
              <path
                d="M100 56 C72 61 51 49 39 38
                   M100 56 C128 61 149 49 161 38"
              />
            </g>
          </svg>

          <span
            class="hero-arabic"
            lang="ar"
            dir="rtl"
          >
            {{ category.nameAr || 'قائمة الطعام' }}
          </span>

          <h1>{{ category.name }}</h1>

          <div class="hero-divider" aria-hidden="true">
            <span></span>

            <svg viewBox="0 0 64 64" fill="none">
              <path d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"/>
              <path d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"/>
              <path d="M32 23V41M23 32H41"/>
            </svg>

            <span></span>
          </div>

          <p>
            {{ category.description || 'Eine Reise durch die Aromen Syriens.' }}
          </p>
        </div>
      </header>

      <!-- Dishes -->
      <section class="dishes-section">
        <div class="dishes-container">
          <RouterLink
            :to="{ path: '/', hash: '#menu' }"
            class="back-link"
          >
            <ArrowLeft :size="18" />
            Zurück zur Speisekarte
          </RouterLink>

          <div v-if="dishes.length" class="dishes-list">
            <article
              v-for="(dish, index) in dishes"
              :key="dish._id"
              class="dish-card"
              :class="{ reversed: index % 2 !== 0 }"
            >
              <div class="dish-image">
                <img
                  v-if="dish.image"
                  :src="imageUrl(dish.image)"
                  :alt="dish.name"
                  loading="lazy"
                />
              </div>

              <div class="dish-content">
                <!-- <div class="content-decoration">
                  <span class="little-leaf">❧</span>
                  <span class="decoration-line"></span>
                </div> -->

                <span
                  v-if="dish.nameAr"
                  class="dish-arabic"
                  lang="ar"
                  dir="rtl"
                >
                  {{ dish.nameAr }}
                </span>

                <h2>{{ dish.name }}</h2>

                <div class="dish-divider" aria-hidden="true">
                  <span></span>

                  <svg viewBox="0 0 64 64" fill="none">
                    <path d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"/>
                    <path d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"/>
                    <path d="M32 23V41M23 32H41"/>
                  </svg>

                  <span></span>
                </div>

                <p>{{ dish.description }}</p>

                <span
                  v-if="dish.price != null"
                  class="dish-price"
                >
                  {{ Number(dish.price).toFixed(2) }} €
                </span>
              </div>
            </article>
          </div>

          <p v-else class="empty-message">
            Für diese Kategorie sind noch keine Gerichte eingetragen.
          </p>
        </div>
      </section>

      <!-- Catering CTA -->
      <!-- <section class="catering-cta">
        <div class="cta-content">
          <span class="cta-arabic" lang="ar" dir="rtl">
            من مطبخ عواطف
          </span>

          <h2>
            Ein besonderer Anlass verdient
            besonderes Essen.
          </h2>

          <p>
            Lassen Sie uns gemeinsam ein unvergessliches
            Catering-Erlebnis gestalten.
          </p>

          <RouterLink
            :to="{ path: '/', hash: '#contact' }"
            class="cta-button"
          >
            Catering anfragen
            <ArrowUpRight :size="19" />
          </RouterLink>
        </div>
      </section> -->
    </template>
  </main>
</template>



<script setup>
import { ref, watch } from 'vue'
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'
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

let requestId = 0

const query = `
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    nameAr,
    description,
    image
  }
`

const dishesQuery = `
  *[
    _type == "dish" &&
    category._ref == $categoryId &&
    available != false
  ] | order(order asc, name asc) {
    _id,
    name,
    nameAr,
    description,
    image,
    price
  }
`

async function loadCategory(slug) {
  const currentRequest = ++requestId

  loading.value = true
  error.value = ''
  category.value = null
  dishes.value = []

  try {
    const result = await sanity.fetch(query, { slug })

    if (currentRequest !== requestId) return

    if (!result) {
      error.value = 'Diese Kategorie wurde nicht gefunden.'
      return
    }

    const resultDishes = await sanity.fetch(dishesQuery, {
      categoryId: result._id
    })

    if (currentRequest !== requestId) return

    category.value = result
    dishes.value = resultDishes
  } catch (err) {
    if (currentRequest !== requestId) return

    console.error('Sanity Fehler:', err)
    error.value = 'Die Gerichte konnten nicht geladen werden.'
  } finally {
    if (currentRequest === requestId) {
      loading.value = false
    }
  }
}

watch(
  () => props.slug,
  loadCategory,
  { immediate: true }
)

function imageUrl(image) {
  if (!image?.asset) return ''

  return urlFor(image)
    .width(1100)
    .height(800)
    .fit('crop')
    .auto('format')
    .url()
}
</script>


<style scoped>
/* ===================================
   CATEGORY PAGE
=================================== */

.category-page {
  min-height: 100vh;
  background: var(--awatef-cream);
  color: var(--awatef-green-700);
}

.page-status {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 150px 20px 80px;
  text-align: center;
  font-family: Georgia, serif;
}

.status-link {
  color: var(--awatef-gold-dark);
}

/* ===================================
   HERO
=================================== */

.category-hero {
  position: relative;
  min-height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 65px 24px 65px;

  background: radial-gradient(
    ellipse at 50% 40%,
    var(--awatef-green-500),
    var(--awatef-green-700) 85%
  );

  color: var(--awatef-cream);
  overflow: hidden;
  text-align: center;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.11;

  background-image:
    repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 42px,
      var(--awatef-gold) 43px,
      transparent 44px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent 0,
      transparent 42px,
      var(--awatef-gold) 43px,
      transparent 44px
    );

  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 780px;
}

.hero-ornament {
  display: block;
  width: 190px;
  height: 65px;
  margin: 0 auto 12px;
  color: var(--awatef-gold);
}

.hero-arabic {
  display: block;
  color: var(--awatef-gold);
  font-family: 'Amiri', serif;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.5;
}

.category-hero h1 {
  font-family: Georgia, serif;
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 400;
  line-height: 1.1;
  margin: 6px 0 22px;
}

.hero-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 220px;
  margin: 28px auto;
}

.hero-divider span {
  flex: 1;
  height: 1px;

  background: color-mix(
    in srgb,
    var(--awatef-gold) 65%,
    transparent
  );
}

.hero-divider svg {
  width: 28px;
  height: 28px;
  flex-shrink: 0;

  stroke: var(--awatef-gold);
  stroke-width: 1.5;
  stroke-linejoin: round;
}

.category-hero p {
  max-width: 600px;
  margin: auto;
  font-family: Georgia, serif;
  font-size: 17px;
  line-height: 1.7;
}

/* ===================================
   DISHES SECTION
=================================== */

.dishes-section {
  position: relative;
  padding: 55px 6% 110px;
  background: var(--awatef-cream);
}

.dishes-container {
  max-width: 1180px;
  margin: auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 38px;

  color: var(--awatef-gold-dark);
  text-decoration: none;
  font-size: 14px;

  transition: gap 0.25s ease;
}

.back-link:hover {
  gap: 15px;
  color: var(--awatef-green-700);
}

.dishes-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* ===================================
   ALTERNATING CARDS
=================================== */

.dish-card {
  position: relative;
  display: grid;
  grid-template-columns: 49% 51%;
  min-height: 295px;

  background: var(--awatef-cream-dark);
  border: 1px solid var(--awatef-gold);
  border-radius: 18px;
  overflow: hidden;

  box-shadow: 0 10px 35px
    color-mix(
      in srgb,
      var(--awatef-green-700) 6%,
      transparent
    );

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.dish-card:hover {
  transform: translateY(-4px);

  box-shadow: 0 18px 40px
    color-mix(
      in srgb,
      var(--awatef-green-700) 15%,
      transparent
    );
}

.dish-card.reversed .dish-image {
  order: 2;
}

/* Dish Image */

.dish-image {
  min-height: 295px;
  background: var(--awatef-cream-dark);
  overflow: hidden;
}

.dish-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.dish-card:hover .dish-image img {
  transform: scale(1.045);
}

/* Dish Content */

.dish-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 35px clamp(25px, 4vw, 65px);
  overflow: hidden;
}

/* Keine Blumen oder floralen Wasserzeichen */

.dish-content::after {
  content: none;
}

.content-decoration {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  color: var(--awatef-gold-dark);
}

.little-leaf {
  font-size: 25px;
  line-height: 1;
}

.decoration-line {
  width: 110px;
  height: 1px;
  background: var(--awatef-gold-dark);
}

.dish-arabic {
  position: relative;
  z-index: 1;
  display: block;

  color: var(--awatef-gold-dark);
  font-family: 'Amiri', serif;
  font-size: 28px;
  line-height: 1.5;
}

.dish-content h2 {
  position: relative;
  z-index: 1;
  margin: 0;

  color: var(--awatef-green-700);
  font-family: Georgia, serif;
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 400;
  line-height: 1.2;
}

/* Geometric Dish Divider */

.dish-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 150px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.dish-divider span {
  flex: 1;
  height: 1px;

  background: color-mix(
    in srgb,
    var(--awatef-gold-dark) 50%,
    transparent
  );
}

.dish-divider svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;

  stroke: var(--awatef-gold-dark);
  stroke-width: 1.5;
  stroke-linejoin: round;
}

.dish-content p {
  position: relative;
  z-index: 1;
  max-width: 440px;
  margin: 0;

  color: var(--awatef-green-700);
  font-family: Georgia, serif;
  font-size: 16px;
  line-height: 1.7;
}

.dish-price {
  margin-top: 18px;
  color: var(--awatef-gold-dark);
  font-family: Georgia, serif;
  font-size: 18px;
}

.empty-message {
  padding: 70px 20px;
  text-align: center;
  font-family: Georgia, serif;
  color: var(--awatef-green-700);
}

/* ===================================
   CATERING CTA
=================================== */

.catering-cta {
  position: relative;
  padding: 90px 6% 100px;

  background: radial-gradient(
    ellipse at 50% 0%,
    var(--awatef-green-500),
    var(--awatef-green-700) 85%
  );

  color: var(--awatef-cream);
  text-align: center;
  overflow: hidden;
}

/* Keine floralen Ornamente */

.catering-cta::before,
.catering-cta::after {
  content: none;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 780px;
  margin: auto;
}

.cta-arabic {
  display: block;
  font-family: 'Amiri', serif;
  font-size: 28px;
  color: var(--awatef-gold);
}

.catering-cta h2 {
  margin: 15px 0 20px;
  font-family: Georgia, serif;
  font-size: clamp(2rem, 4vw, 3.3rem);
  font-weight: 400;
  line-height: 1.25;
}

.catering-cta p {
  font-family: Georgia, serif;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 30px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 15px 28px;

  border-radius: 30px;
  background: var(--awatef-gold);
  color: var(--awatef-green-700);

  font-weight: 600;
  text-decoration: none;

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  background: var(--awatef-gold-light);
}

/* ===================================
   TABLET
=================================== */

@media (max-width: 900px) {
  .dish-card {
    grid-template-columns: 45% 55%;
    min-height: 260px;
  }

  .dish-image {
    min-height: 260px;
  }

  .dish-content {
    padding: 28px;
  }

  .dish-content h2 {
    font-size: 30px;
  }
}

/* ===================================
   MOBILE
=================================== */

@media (max-width: 650px) {
  .category-hero {
    min-height: 340px;
    padding: 125px 20px 55px;
  }

  .hero-ornament {
    width: 145px;
  }

  .category-hero h1 {
    font-size: 3.1rem;
  }

  .category-hero p {
    font-size: 15px;
  }

  .dishes-section {
    padding: 35px 5% 70px;
  }

  .back-link {
    margin-bottom: 28px;
  }

  .dish-card {
    grid-template-columns: 1fr;
  }

  .dish-card.reversed .dish-image {
    order: 0;
  }

  .dish-image {
    height: 230px;
    min-height: 0;
  }

  .dish-content {
    padding: 28px 25px 32px;
  }

  .dish-content h2 {
    font-size: 30px;
  }

  .dish-arabic {
    font-size: 25px;
  }

  .dish-content p {
    font-size: 15px;
  }

  .catering-cta {
    padding: 70px 7%;
  }
}

/* ===================================
   REDUCED MOTION
=================================== */

@media (prefers-reduced-motion: reduce) {
  .dish-card,
  .dish-image img,
  .back-link,
  .cta-button {
    transition: none;
  }
}
</style>
