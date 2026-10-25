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

        <a
          href="https://www.tiktok.com/@awatefcatering"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Awatef Catering auf TikTok"
          class="social-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M16.6 2c.2 2.1 1.4 3.4 3.4 3.5v3.4a9.4 9.4 0 0 1-3.4-1v6.8a6.4 6.4 0 1 1-6.4-6.4c.4 0 .8 0 1.2.1v3.5a3 3 0 1 0 1.8 2.8V2h3.4Z"
            />
          </svg>
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


<style scoped>
.awatef-navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 16px 0;

  background: color-mix(
    in srgb,
    var(--color-primary) 94%,
    transparent
  );

  transition: background 0.3s ease, padding 0.3s ease;
}

.navbar-scrolled,
.mobile-open {
  background: color-mix(
    in srgb,
    var(--color-primary) 98%,
    transparent
  );

  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
}

.navbar-scrolled {
  padding: 10px 0;
}

/* Container */

.nav-container {
  max-width: 1400px;
  margin: auto;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

/* Logo */

.brand-logo {
  width: 145px;
  height: auto;
  max-height: 70px;
  object-fit: contain;
}

/* Desktop Navigation */

.desktop-links {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
}

.desktop-links .nav-link {
  color: var(--awatef-cream);
  font-family: Georgia, serif;
  font-size: 15px;
  transition: color 0.3s ease;
}

.desktop-links .nav-link:hover {
  color: var(--awatef-gold);
}

/* Social Links */

.nav-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.social-link {
  color: var(--awatef-cream);
  display: flex;
  align-items: center;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.social-link:hover {
  color: var(--awatef-gold);
  transform: translateY(-2px);
}

/* Catering Button */

.catering-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  background: var(--awatef-gold);
  color: var(--color-primary);

  padding: 12px 22px;
  border-radius: 50px;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;

  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.catering-btn:hover {
  background: var(--awatef-gold-light);
  color: var(--color-primary);
  transform: translateY(-2px);
}

/* Mobile Toggle */

.mobile-toggle {
  display: none;
  border: none;
  background: transparent;
  color: var(--awatef-cream);
  cursor: pointer;
}

.mobile-menu {
  display: none;
}

/* Smaller Desktop */

@media (max-width: 1100px) {
  .desktop-links {
    gap: 12px;
  }

  .nav-actions {
    gap: 12px;
  }
}

/* Tablet & Mobile */

@media (max-width: 991px) {
  .awatef-navbar {
    background: var(--color-primary);
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

    border-top: 1px solid color-mix(
      in srgb,
      var(--awatef-cream) 22%,
      transparent
    );
  }

  .mobile-menu a {
    color: var(--awatef-cream);
    text-decoration: none;
    padding: 12px 8px;
    font-size: 17px;
    transition: color 0.3s ease;
  }

  .mobile-menu a:hover {
    color: var(--awatef-gold);
  }

  .mobile-menu .mobile-cta {
    background: var(--awatef-gold);
    color: var(--color-primary);
    text-align: center;
    border-radius: 30px;
    margin-top: 12px;
  }

  .mobile-menu .mobile-cta:hover {
    background: var(--awatef-gold-light);
    color: var(--color-primary);
  }

  .brand-logo {
    width: 115px;
  }
}

/* Reduced Motion */

@media (prefers-reduced-motion: reduce) {
  .awatef-navbar,
  .desktop-links .nav-link,
  .social-link,
  .catering-btn,
  .mobile-menu a {
    transition: none;
  }
}
</style>
