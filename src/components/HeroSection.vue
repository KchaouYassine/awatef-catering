
<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="hero-section">
    <!-- Decorative pattern -->
    <div class="hero-pattern" aria-hidden="true"></div>

    <div class="hero-content">
      <div class="hero-text">
        <img
          src="/images/awatef-logo.png"
          alt="Awatef Catering"
          class="hero-logo"
        />

        <h1>
          Ein Stück Syrien<br />
          auf Ihrem Teller
        </h1>

        <div class="gold-line"></div>

        <p>
          Mit Liebe, Tradition und frischen Zutaten
          bringen wir die authentische syrische Küche
          zu Ihren besonderen Anlässen.
        </p>

        <!-- <a href="#menu" class="hero-button">
          Unsere Speisekarte entdecken
          <ArrowRight :size="20" :stroke-width="1.5" />
        </a> -->
      </div>
    </div>

    <!-- Image with curved edge -->
    <div class="hero-image-container">
      <img
        src="/images/syrian-food-hero.jpg"
        alt="Traditionelle syrische Spezialitäten"
        class="hero-image"
      />
    </div>

    <div class="hero-glow" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 720px;
  height: 100svh;
  max-height: 1000px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background:
    radial-gradient(
      circle at 40% 65%,
      rgba(20, 115, 98, 0.35),
      transparent 55%
    ),
    linear-gradient(135deg, #032f29, #075347);
  color: #f7f0e3;
}

/* Left side */
.hero-content {
  position: relative;
  z-index: 3;
  width: 53%;
  padding: 120px 4% 80px 9%;
}

.hero-text {
  max-width: 510px;
  animation: slideFromLeft 0.9s ease-out both;
}

.hero-logo {
  display: block;
  float: right;
  width: 100%;
  max-height: 145px;
  object-fit: contain;
  margin-bottom: 20px;
}

.hero-text h1 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.7rem, 4.1vw, 4.3rem);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -1px;
  margin: 0 0 25px;
}

.gold-line {
  width: 48px;
  height: 2px;
  background: #d6b478;
  margin-bottom: 28px;
}

.hero-text p {
  font-family: Georgia, serif;
  font-size: clamp(1rem, 1.3vw, 1.2rem);
  line-height: 1.6;
  max-width: 410px;
  margin-bottom: 36px;
  color: #eee6d8;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 16px 28px;
  border-radius: 50px;
  background: #d6b478;
  color: #032f29;
  text-decoration: none;
  font-size: 15px;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.hero-button:hover {
  background: #eac995;
  color: #032f29;
  transform: translateY(-3px);
}

/* Right image */
.hero-image-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  clip-path: none;
  animation: slideFromRight 1.1s ease-out both;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.03);
}

.hero-image-container::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(3, 47, 41, 0.12),
    transparent 35%
  );
  pointer-events: none;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.045;
  pointer-events: none;
  background-image:
    repeating-linear-gradient(
      45deg,
      #d6b478 0,
      #d6b478 1px,
      transparent 1px,
      transparent 40px
    );
}

.hero-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  left: 30%;
  bottom: -250px;
  background: rgba(17, 118, 99, 0.3);
  filter: blur(80px);
  border-radius: 50%;
  pointer-events: none;
}

/* Animations */
@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-55px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translateX(80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Tablet */
@media (max-width: 991px) {
  .hero-content {
    width: 62%;
    padding-left: 6%;
  }

  .hero-image-container {
    width: 52%;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .hero-section {
    height: auto;
    max-height: none;
    min-height: 100svh;
    flex-direction: column;
    align-items: stretch;
  }

  .hero-image-container {
    display: none !important;
  }

  .hero-content {
    width: 100%;
    padding: 130px 7% 50px;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-logo {
    width: 190px;
  }

  .hero-text h1 {
    font-size: clamp(2.5rem, 9vw, 3.7rem);
  }

  .hero-image-container {
    position: relative;
    width: 100%;
    height: 360px;
    min-height: 300px;
    clip-path: ellipse(85% 95% at 60% 100%);
  }

  .hero-button {
    padding: 15px 22px;
    font-size: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-text,
  .hero-image-container {
    animation: none;
  }

  .hero-button {
    transition: none;
  }
}
</style>
