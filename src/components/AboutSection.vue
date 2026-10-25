<template>
  <section
    id="about"
    ref="aboutRef"
    class="about-section"
    :class="{ visible: isVisible }"
  >
    <div class="about-inner">
      <div class="about-copy">
        <span class="arabic-title" lang="ar" dir="rtl">
          من نحن
        </span>

        <h2>Über Awatef</h2>
        <div class="gold-rule"></div>

        <div class="about-story">
          <p>
            Ich habe schon immer daran geglaubt,
            dass gutes Essen mehr braucht als nur
            die richtigen Zutaten: Liebe, Leidenschaft
            und echte Gefühle.
          </p>

          <p>
            Mit dieser Überzeugung koche ich und
            versuche jeden Tag, meine Arbeit mit
            den Werten zu verbinden, die mich
            geprägt haben.
          </p>

          <p>
            Deshalb trägt mein Catering-Unternehmen
            den Namen meiner Mutter:
            <strong>Awatef</strong>.
          </p>

          <p>
            Sie hat mir die Werte mitgegeben,
            die mich bis heute begleiten.
            Ihre Liebe und ihre unermüdliche
            Unterstützung bedeuten mir unendlich viel.
            Mit ihrem Namen bleibt sie ein Teil von
            allem, was ich tue – besonders meiner
            Leidenschaft fürs Kochen.
          </p>
        </div>

        <div class="about-values">
          <div
            v-for="value in values"
            :key="value.label"
            class="value"
          >
            <span class="value-icon">
              <component
                :is="value.icon"
                :size="26"
                :stroke-width="1.4"
              />
            </span>
            <span>{{ value.label }}</span>
            <span>{{ value.second }}</span>
          </div>
        </div>
      </div>

      <div class="about-art">
        <div class="portrait-background"></div>

        <img
          class="about-portrait"
          src="/images/awatef-about.png"
          alt="Die Gründerin von Awatef Catering"
          loading="lazy"
        />

        <div class="portrait-fade"></div>

        <div class="signature" aria-hidden="true">
          Heba <Heart :size="28" :stroke-width="1.2" />
        </div>

        <div class="quote-card">
          <span class="quote-symbol" aria-hidden="true">“</span>
          <p>Mit Liebe gekocht. <br> Von Herzen inspiriert.</p>
          <span>Awatef Catering</span>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Heart, Leaf, UsersRound } from 'lucide-vue-next'

const aboutRef = ref(null)
const isVisible = ref(false)
let observer = null

const values = [
  { icon: Heart, label: 'Mit Liebe', second: 'gekocht' },
  { icon: Leaf, label: 'Frische', second: 'Zutaten' },
  { icon: UsersRound, label: 'Für Ihre', second: 'besonderen Anlässe' }
]

onMounted(() => {
  if (!aboutRef.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.12 }
  )

  observer.observe(aboutRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>


<style scoped>
.about-section {
  position: relative;
  overflow: hidden;
  background: #f7f0e3;
  color: #173c35;
  scroll-margin-top: 80px;
}

.about-inner {
  max-width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 52% 48%;
  align-items: stretch;
  min-height: 650px;
}

.about-copy {
  position: relative;
  z-index: 3;
  padding: 85px 5% 75px 25%;
}

.arabic-title {
  display: block;
  width: fit-content;
  color: #a47d46;
  font-family: 'Amiri', serif;
  font-size: 2.7rem;
  line-height: 1.3;
}

.about-copy h2 {
  font-family: Georgia, serif;
  font-size: clamp(3rem, 4vw, 4.5rem);
  font-weight: 400;
  color: #06483e;
  margin: 0 0 18px;
}

.gold-rule {
  width: 58px;
  height: 2px;
  background: #c7a46a;
  margin-bottom: 28px;
}

.about-story {
  max-width: 570px;
}

.about-story p {
  font-family: Georgia, serif;
  font-size: clamp(15px, 1.15vw, 18px);
  line-height: 1.7;
  color: #51463c;
  margin-bottom: 15px;
}

.about-story strong {
  color: #06483e;
}

/* Values */

.about-values {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 38px;
}

.value {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Georgia, serif;
  font-size: 14px;
  line-height: 1.35;
}

.value-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border: 1px solid #ae854d;
  border-radius: 50%;
  color: #ae854d;
  margin-bottom: 12px;
}

/* Portrait area */

.about-art {
  position: relative;
  min-height: 650px;
  isolation: isolate;
}

.portrait-background {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 80% 30%,
      #e3d0b2,
      transparent 55%
    ),
    #f0e4d1;
}

.about-portrait {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 25%;
  z-index: 1;
}

/* Soft transition from cream to portrait */

.portrait-fade {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    linear-gradient(
      90deg,
      #f7f0e3 0%,
      rgba(247,240,227,.95) 5%,
      rgba(247,240,227,.4) 23%,
      transparent 48%
    ),
    linear-gradient(
      0deg,
      rgba(247,240,227,.5),
      transparent 30%
    );
}

/* Signature */

.signature {
  position: absolute;
  left: 8%;
  bottom: 50px;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #06483e;
  font-family: 'Brush Script MT', cursive;
  font-size: 2.5rem;
  transform: rotate(-7deg);
}

.signature svg {
  color: #b58b50;
}

/* Quote */

.quote-card {
  position: absolute;
  z-index: 4;
  right: 5%;
  bottom: 45px;
  width: min(270px, 55%);
  padding: 25px;
  background: #06483e;
  color: #f7f0e3;
  border-radius: 28px 4px 28px 28px;
  box-shadow: 0 15px 40px rgba(0,0,0,.18);
}

.quote-symbol {
  display: block;
  color: #d6b478;
  font-family: Georgia, serif;
  font-size: 60px;
  line-height: .5;
}

.quote-card p {
  font-family: Georgia, serif;
  font-size: 17px;
  line-height: 1.45;
  margin: 12px 0 12px;
}

.quote-card > span:last-child {
  display: block;
  text-align: right;
  color: #d6b478;
  font-size: 13px;
}

/* Scroll animations */

.about-copy,
.about-art {
  opacity: 0;
  transition: opacity .9s ease, transform .9s ease;
}

.about-copy {
  transform: translateX(-35px);
}

.about-art {
  transform: translateX(45px);
}

.visible .about-copy,
.visible .about-art {
  opacity: 1;
  transform: translateX(0);
}

/* Tablet */


@media (max-width: 1100px) {
  .about-inner {
    grid-template-columns: 55% 45%;
  }

  .about-copy {
    padding: 65px 5%;
  }

  .about-art {
    min-height: 620px;
  }

  .quote-card {
    width: 210px;
    padding: 20px;
  }

  .signature {
    display: none;
  }
}

/* Mobile */

@media (max-width: 767px) {
  .about-inner {
    display: flex;
    flex-direction: column;
  }

  .about-copy {
    padding: 65px 7% 40px;
  }

  .arabic-title {
    font-size: 2.2rem;
  }

  .about-copy h2 {
    font-size: 3rem;
  }

  .about-story p {
    font-size: 16px;
  }

  .about-values {
    gap: 10px;
    margin-top: 30px;
  }

  .value {
    font-size: 12px;
  }

  .value-icon {
    width: 48px;
    height: 48px;
  }

  .about-art {
    width: 100%;
    min-height: 460px;
  }

  .about-portrait {
    object-position: center 20%;
  }

  .portrait-fade {
    background:
      linear-gradient(
        180deg,
        #f7f0e3 0%,
        transparent 24%,
        transparent 75%,
        rgba(247,240,227,.2) 100%
      );
  }

  .quote-card {
    right: 5%;
    bottom: 20px;
    width: 200px;
  }

  .quote-card p {
    font-size: 14px;
  }

  .signature {
    display: flex;
    left: 5%;
    bottom: 35px;
    font-size: 1.7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-copy,
  .about-art {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
