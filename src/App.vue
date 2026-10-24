<template>
  <Navbar />

  <main>
    <HeroSection />
    <AboutSection id="about"/>
    <MenuSection id="menu" /> 
    <section id="gallery"></section>
    <section id="contact"></section>
  </main>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import MenuSection from './components/MenuSection.vue'


</script>

<style scoped>
.demo-hero {
  min-height: 100vh;
  background: #06483e;
  color: #f7f0e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 130px 8% 80px;
}

.demo-hero h1 {
  font-size: clamp(2.5rem, 5vw, 5rem);
  max-width: 650px;
}

.demo-hero p {
  margin: 20px 0 30px;
}

.demo-section {
  min-height: 60vh;
  padding: 130px 8% 80px;
  scroll-margin-top: 90px;
}
</style>
