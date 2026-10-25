
<script setup>
import { ref } from 'vue'

const occasions = [
  {
    de: 'Hochzeiten',
    ar: 'حفلات الزفاف'
  },
  {
    de: 'Geburtstage',
    ar: 'أعياد الميلاد'
  },
  {
    de: 'Private Feiern',
    ar: 'المناسبات الخاصة'
  },
  {
    de: 'Firmenevents',
    ar: 'الفعاليات التجارية'
  }
]

const paused = ref(false)
</script>

<template>
  <section
    class="occasion-ribbon"
    aria-label="Unsere Catering-Anlässe"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <!-- TOP ORNAMENTAL BORDER -->
    <div class="ribbon-border" aria-hidden="true">
      <span class="border-line"></span>

      <svg
        class="border-ornament"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"
        />
        <path
          d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"
        />
        <path d="M32 23V41M23 32H41"/>
      </svg>

      <span class="border-line"></span>
    </div>

    <!-- MOVING OCCASIONS -->
    <div class="marquee-viewport">
      <div
        class="marquee-track"
        :class="{ 'is-paused': paused }"
      >
        <div
          v-for="copy in 4"
          :key="copy"
          class="marquee-group"
          :aria-hidden="copy > 1 ? 'true' : undefined"
        >
          <div
            v-for="occasion in occasions"
            :key="occasion.de"
            class="occasion-item"
          >
            <div class="occasion-text">
              <span class="occasion-de">
                {{ occasion.de }}
              </span>

              <span
                class="occasion-ar"
                lang="ar"
                dir="rtl"
              >
                {{ occasion.ar }}
              </span>
            </div>

            <!-- <svg
              class="occasion-ornament"
              viewBox="0 0 64 64"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"
              />
              <path
                d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"
              />
              <path d="M32 23V41M23 32H41"/>
            </svg> -->
          </div>
        </div>
      </div>
    </div>

    <!-- BOTTOM ORNAMENTAL BORDER -->
    <div class="ribbon-border" aria-hidden="true">
      <span class="border-line"></span>

      <svg
        class="border-ornament"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"
        />
        <path
          d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"
        />
        <path d="M32 23V41M23 32H41"/>
      </svg>

      <span class="border-line"></span>
    </div>
  </section>
</template>

<style scoped>
/* =====================================
   OCCASION RIBBON
===================================== */

.occasion-ribbon {
  position: relative;
  width: 100%;
  padding: 19px 0;
  overflow: hidden;

  background: radial-gradient(
    ellipse at center,
    #fff9ee 0%,
    #f7f0e3 75%,
    #efe0c8 100%
  );
}

/* =====================================
   DECORATIVE BORDERS
===================================== */

.ribbon-border {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 30px;
  color: #b78a4a;
}

.border-line {
  flex: 1;
  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    #c7a46a 12%,
    #c7a46a 88%,
    transparent
  );
}

/* =====================================
   AWATEF GEOMETRIC ORNAMENT
===================================== */

.border-ornament,
.occasion-ornament {
  display: block;
  flex-shrink: 0;

  fill: none;
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-linejoin: round;

  color: #b78a4a;
}

.border-ornament {
  width: 23px;
  height: 23px;
}

.occasion-ornament {
  width: 30px;
  height: 30px;
}

/* =====================================
   MARQUEE
===================================== */

.marquee-viewport {
  width: 100%;
  overflow: hidden;
  padding: 24px 0;
}

.marquee-track {
  display: flex;
  width: max-content;

  animation: marquee-scroll 48s linear infinite;
  will-change: transform;
}

.marquee-track.is-paused {
  animation-play-state: paused;
}

.marquee-group {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.occasion-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 38px;
  padding-right: 80px;
  padding-left: 80px;

}

.occasion-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  white-space: nowrap;
}

/* =====================================
   TYPOGRAPHY
===================================== */

.occasion-de {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(25px, 3vw, 37px);
  font-weight: 400;
  line-height: 1.15;

  color: #073d34;
}

.occasion-ar {
  font-family: 'Amiri', Georgia, serif;
  font-size: clamp(18px, 2vw, 23px);
  line-height: 1.5;

  color: #a5783f;
}

/* =====================================
   ANIMATION
===================================== */

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }

  to {
    /* Four identical groups: move one group */
    transform: translateX(-25%);
  }
}

/* =====================================
   ACCESSIBILITY
===================================== */

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
    will-change: auto;
  }
}

/* =====================================
   MOBILE
===================================== */

@media (max-width: 650px) {
  .occasion-ribbon {
    padding: 13px 0;
  }

  .ribbon-border {
    padding: 0 15px;
  }

  .marquee-viewport {
    padding: 18px 0;
  }

  .occasion-item {
    gap: 22px;
    padding-right: 15px;
  }

  .occasion-de {
    font-size: 27px;
  }

  .occasion-ar {
    font-size: 19px;
  }

  .occasion-ornament {
    width: 25px;
    height: 25px;
  }

  .border-ornament {
    width: 20px;
    height: 20px;
  }
}
</style>
