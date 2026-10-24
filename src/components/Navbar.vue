
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from '@coreui/vue'
import { Instagram, MessageCircle, Menu, X, CalendarDays } from 'lucide-vue-next'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const links = [
  { label: 'Startseite', href: '#home' },
  { label: 'Über uns', href: '#about' },
  { label: 'Speisekarte', href: '#menu' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
]

const checkScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  checkScroll()
  window.addEventListener('scroll', checkScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <CNavbar
    class="awatef-navbar"
    :class="{
      'navbar-scrolled': isScrolled,
      'mobile-open': mobileMenuOpen,
    }"
    expand="lg"
  >
    <CContainer fluid class="nav-container">

      <!-- Logo -->
      <CNavbarBrand href="#home" class="brand" @click="closeMenu">
        <img
          src="/images/awatef-logo.png"
          alt="Awatef Catering"
          class="brand-logo"
        />
      </CNavbarBrand>

      <!-- Desktop navigation -->
      <CNavbarNav class="desktop-links">
        <CNavItem v-for="link in links" :key="link.href">
          <CNavLink :href="link.href">
            {{ link.label }}
          </CNavLink>
        </CNavItem>
      </CNavbarNav>

      <!-- Desktop actions -->
      <div class="nav-actions">
        <a
          href="https://www.instagram.com/awatef_catering/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="social-link"
        >
          <Instagram :size="20" />
        </a>

        <!-- WhatsApp-Link ergänzen, sobald die Nummer vorliegt -->
        <a href="#contact" aria-label="Kontakt" class="social-link">
          <MessageCircle :size="20" />
        </a>

        <a href="#contact" class="catering-btn">
          <CalendarDays :size="17" />
          <span>Catering-Anfrage</span>
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        type="button"
        class="mobile-toggle"
        :aria-expanded="mobileMenuOpen"
        aria-controls="awatef-mobile-menu"
        aria-label="Navigationsmenü öffnen oder schließen"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <X v-if="mobileMenuOpen" :size="26" />
        <Menu v-else :size="26" />
      </button>

      <!-- Mobile navigation -->
      <div
        v-if="mobileMenuOpen"
        id="awatef-mobile-menu"
        class="mobile-menu"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>

        <a href="#contact" class="mobile-cta" @click="closeMenu">
          Catering-Anfrage
        </a>
      </div>
    </CContainer>
  </CNavbar>
</template>

<style scoped>
.awatef-navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 16px 0;
  background: rgba(3, 47, 41, 0.92);
}

.navbar-scrolled,
.mobile-open {
  background: rgba(3, 47, 41, 0.97);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
}

.navbar-scrolled {
  padding: 10px 0;
}

.nav-container {
  max-width: 1400px;
  margin: auto;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand-logo {
  width: 145px;
  height: auto;
  max-height: 70px;
  object-fit: contain;
}

.desktop-links {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
}

.desktop-links .nav-link {
  color: #f7f0e3;
  font-family: Georgia, serif;
  font-size: 15px;
  transition: color 0.3s ease;
}

.desktop-links .nav-link:hover {
  color: #d6b478;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.social-link {
  color: #f7f0e3;
  display: flex;
  align-items: center;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-link:hover {
  color: #d6b478;
  transform: translateY(-2px);
}

.catering-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #d6b478;
  color: #032f29;
  padding: 12px 22px;
  border-radius: 50px;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.3s ease, transform 0.3s ease;
}

.catering-btn:hover {
  background: #ebc994;
  color: #032f29;
  transform: translateY(-2px);
}

.mobile-toggle {
  display: none;
  border: none;
  background: transparent;
  color: #f7f0e3;
  cursor: pointer;
}

.mobile-menu {
  display: none;
}

@media (max-width: 1100px) {
  .desktop-links {
    gap: 12px;
  }

  .nav-actions {
    gap: 12px;
  }
}

@media (max-width: 991px) {
  .awatef-navbar {
    background: #032f29;
  }

  .desktop-links,
  .nav-actions {
    display: none;
  }

  .mobile-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 6px;
    padding: 24px 0 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .mobile-menu a {
    color: #f7f0e3;
    text-decoration: none;
    padding: 12px 8px;
    font-size: 17px;
  }

  .mobile-menu a:hover {
    color: #d6b478;
  }

  .mobile-menu .mobile-cta {
    background: #d6b478;
    color: #032f29;
    text-align: center;
    border-radius: 30px;
    margin-top: 12px;
  }

  .brand-logo {
    width: 115px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .awatef-navbar,
  .social-link,
  .catering-btn {
    transition: none;
  }
}
</style>
