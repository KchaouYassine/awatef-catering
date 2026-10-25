<template>
  <main>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <OccasionRibbon />
    <CateringInquirySection id="contact" />
    <Footer />

  </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import MenuSection from '../components/MenuSection.vue'
import OccasionRibbon from '../components/OccasionRibbon.vue'
import CateringInquirySection from '../components/CateringInquirySection.vue'
import Footer from '../components/Footer.vue'
</script>
