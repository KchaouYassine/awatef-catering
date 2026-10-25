<template>
  <footer class="awatef-footer">
    <div class="footer-container">
      <!-- BRAND -->
      <div class="footer-brand">
        <svg
          class="brand-ornament"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <path d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"/>
          <path d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"/>
          <path d="M32 23V41M23 32H41"/>
        </svg>

        <RouterLink to="/" class="brand-link">
          <span class="brand-arabic" lang="ar" dir="rtl">
            عواطف
          </span>

          <span class="brand-name">AWATEF</span>

          <span class="brand-subtitle">CATERING</span>
        </RouterLink>

        <!-- <p class="brand-tagline">
          Ein Stück Syrien. Mit Liebe serviert.
        </p> -->
      </div>

      <!-- DECORATIVE DIVIDER -->
      <div class="footer-divider" aria-hidden="true">
        <span></span>

        <svg viewBox="0 0 64 64" fill="none">
          <path d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"/>
          <path d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"/>
          <path d="M32 23V41M23 32H41"/>
        </svg>

        <span></span>
      </div>

      <!-- LINKS & CONTACT -->
      <div class="footer-main">
        <div class="footer-column">
          <h3>Entdecken</h3>

          <nav aria-label="Footer-Navigation">
            <RouterLink to="/">Startseite</RouterLink>
            <RouterLink to="/#about">Über uns</RouterLink>
            <RouterLink to="/#menu">Speisekarte</RouterLink>
            <RouterLink to="/#contact">Catering anfragen</RouterLink>
          </nav>
        </div>

        <div class="footer-column">
          <h3>Kontakt</h3>

          <div class="contact-links">
            <a :href="`mailto:${contact.email}`">
              <Mail :size="17" :stroke-width="1.6" />
              <span>{{ contact.email }}</span>
            </a>

            <a :href="`tel:${contact.phoneLink}`">
              <Phone :size="17" :stroke-width="1.6" />
              <span>{{ contact.phone }}</span>
            </a>

            <a
              v-if="instagramUrl"
              :href="instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram :size="17" :stroke-width="1.6" />
              <span>Instagram</span>
              <ArrowUpRight :size="14" />
            </a>
          </div>
        </div>

        <div class="footer-column footer-message">
          <h3 lang="ar" dir="rtl">من القلب إلى مائدتكم</h3>

          <p>
            Traditionelle syrische Küche,
            mit Liebe zubereitet und
            für Ihre besonderen Momente serviert.
          </p>

          <RouterLink to="/#contact" class="footer-cta">
            Jetzt Catering anfragen
            <ArrowUpRight :size="16" />
          </RouterLink>
        </div>
      </div>

      <!-- BOTTOM -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} Awatef Catering.
          Alle Rechte vorbehalten.
        </p>

        <div class="legal-links">
          <RouterLink to="/impressum">
            Impressum
          </RouterLink>

          <RouterLink to="/datenschutz">
            Datenschutz
          </RouterLink>
        </div>
      </div>

      <!-- DEVELOPER CREDIT -->
      <div class="developer-credit">
        <span>Website entwickelt von</span>

        <a
          v-if="developer.portfolio"
          :href="developer.portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ developer.name }}
          <ArrowUpRight :size="13" />
        </a>

        <span v-else class="developer-name">
          {{ developer.name }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  Mail,
  Phone,
  ArrowUpRight,
  Instagram
} from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const contact = {
  email: 'heba.akkab@gmail.com',
  phone: '0172 9058837',
  phoneLink: '+491729058837'
}

// Später durch deine echte Portfolio-URL ersetzen
const developer = {
  name: 'Yassin Kchaou',
  portfolio: 'https://yassin-kchaou-portfolio.netlify.app/'
}

// Optional: Instagram-Profil ergänzen
const instagramUrl = ''
</script>



<style scoped>
/* ===================================
   FOOTER
=================================== */

.awatef-footer {
  position: relative;
  overflow: hidden;

  background: radial-gradient(
    ellipse at top center,
    var(--awatef-cream) 0%,
    var(--awatef-cream-dark) 65%,
    color-mix(
      in srgb,
      var(--awatef-cream-dark) 85%,
      var(--awatef-gold) 15%
    ) 100%
  );

  color: var(--awatef-green-700);

  border-top: 1px solid var(--awatef-gold-dark);
  padding: 75px 24px 24px;
}

.footer-container {
  max-width: 1180px;
  margin: 0 auto;
}

/* ===================================
   BRAND
=================================== */

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.brand-ornament {
  width: 30px;
  height: 30px;
  margin-bottom: 13px;

  stroke: var(--awatef-gold-dark);
  stroke-width: 1.5;
  stroke-linejoin: round;
}

.brand-link {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: inherit;
  text-decoration: none;
}

.brand-arabic {
  color: var(--awatef-green-700);
  font-family: 'Amiri', Georgia, serif;
  font-size: 49px;
  line-height: 1.25;
}

.brand-name {
  color: var(--awatef-green-700);
  font-family: Georgia, serif;
  font-size: 28px;
  letter-spacing: 7px;
  line-height: 1.4;
}

.brand-subtitle {
  color: var(--awatef-gold-dark);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 5px;
}

.brand-tagline {
  margin: 19px 0 0;

  color: var(--awatef-green-700);
  font-family: Georgia, serif;
  font-size: 15px;
  font-style: italic;
}

/* ===================================
   ORNAMENTAL DIVIDER
=================================== */

.footer-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 47px 0;
}

.footer-divider span {
  flex: 1;
  height: 1px;

  background: linear-gradient(
    90deg,
    transparent,
    var(--awatef-gold-dark),
    transparent
  );
}

.footer-divider svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;

  stroke: var(--awatef-gold-dark);
  stroke-width: 1.5;
  stroke-linejoin: round;
}

/* ===================================
   MAIN GRID
=================================== */

.footer-main {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1.2fr;
  gap: 65px;
  padding-bottom: 60px;
}

.footer-column h3 {
  margin: 0 0 22px;

  color: var(--awatef-gold-dark);
  font-family: Georgia, serif;
  font-size: 19px;
  font-weight: 400;
}

.footer-column nav,
.contact-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.footer-column nav a,
.contact-links a {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  max-width: 100%;

  color: var(--awatef-green-700);
  font-size: 14px;
  text-decoration: none;
  overflow-wrap: anywhere;

  transition:
    color 0.25s ease,
    transform 0.25s ease;
}

.footer-column nav a:hover,
.contact-links a:hover {
  color: var(--awatef-gold-dark);
  transform: translateX(4px);
}

.contact-links svg {
  flex-shrink: 0;
  color: var(--awatef-gold-dark);
}

/* ===================================
   MESSAGE
=================================== */

.footer-message h3 {
  font-family: 'Amiri', Georgia, serif;
  font-size: 26px;
}

.footer-message p {
  max-width: 290px;
  margin: 0 0 22px;

  color: var(--awatef-green-700);
  font-size: 14px;
  line-height: 1.9;
}

.footer-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 6px;

  border-bottom: 1px solid var(--awatef-gold-dark);

  color: var(--awatef-green-700);
  font-family: Georgia, serif;
  font-size: 14px;
  text-decoration: none;

  transition:
    color 0.25s ease,
    gap 0.25s ease;
}

.footer-cta:hover {
  gap: 16px;
  color: var(--awatef-gold-dark);
}

/* ===================================
   BOTTOM
=================================== */

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 18px;
  padding: 24px 0;

  border-top: 1px solid color-mix(
    in srgb,
    var(--awatef-gold-dark) 45%,
    transparent
  );
}

.copyright {
  margin: 0;
  color: var(--awatef-green-700);
  font-size: 12px;
}

.legal-links {
  display: flex;
  gap: 25px;
}

.legal-links a {
  color: var(--awatef-green-700);
  font-size: 12px;
  text-decoration: none;

  transition: color 0.25s ease;
}

.legal-links a:hover {
  color: var(--awatef-gold-dark);
}

/* ===================================
   DEVELOPER CREDIT
=================================== */

.developer-credit {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 20px;

  border-top: 1px solid color-mix(
    in srgb,
    var(--awatef-gold-dark) 35%,
    transparent
  );

  color: var(--awatef-green-700);
  font-size: 11px;
}

.developer-credit a {
  display: inline-flex;
  align-items: center;
  gap: 3px;

  color: var(--awatef-gold-dark);
  text-decoration: none;

  transition: color 0.25s ease;
}

.developer-credit a:hover {
  color: var(--awatef-green-700);
  text-decoration: underline;
}

.developer-name {
  color: var(--awatef-gold-dark);
}

/* ===================================
   TABLET
=================================== */

@media (max-width: 850px) {
  .footer-main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 45px;
  }

  .footer-message {
    grid-column: 1 / -1;
  }

  .footer-message p {
    max-width: 500px;
  }
}

/* ===================================
   MOBILE
=================================== */

@media (max-width: 550px) {
  .awatef-footer {
    padding: 55px 20px 22px;
  }

  .brand-arabic {
    font-size: 43px;
  }

  .brand-name {
    font-size: 25px;
  }

  .footer-divider {
    margin: 35px 0;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 35px;
    padding-bottom: 45px;
  }

  .footer-message {
    grid-column: auto;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .legal-links {
    justify-content: center;
  }

  .developer-credit {
    text-align: center;
  }
}

/* ===================================
   REDUCED MOTION
=================================== */

@media (prefers-reduced-motion: reduce) {
  .footer-column a,
  .footer-cta,
  .developer-credit a {
    transition: none;
  }
}
</style>
