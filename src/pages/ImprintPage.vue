
<script setup>
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Building2
} from 'lucide-vue-next'

const company = {
  name: 'Awatef Catering',

  owner: 'Hebatullah Alakkab',
  street: 'Mannheimer Straße 198',
  postalCode: ' 67657',
  city: 'Kaiseralautern',

  email: 'heba.akkab@gmail.com',
  phone: '0172 9058837',
  phoneLink: '+491729058837'
}
</script>

<template>
  <main class="imprint-page">
    <!-- HERO -->
    <section class="imprint-hero">
      <div class="hero-content">
        <span class="hero-arabic" lang="ar" dir="rtl">
          معلومات قانونية
        </span>

        <h1>Impressum</h1>

        <div class="header-ornament" aria-hidden="true">
          <span></span>

          <svg viewBox="0 0 64 64" fill="none">
            <path
              d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"
            />
            <path
              d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"
            />
            <path d="M32 23V41M23 32H41"/>
          </svg>

          <span></span>
        </div>

        <p>Rechtliche Informationen zu Awatef Catering</p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="imprint-content">
      <div class="content-container">
        <RouterLink to="/" class="back-link">
          <ArrowLeft :size="17" />
          Zurück zur Startseite
        </RouterLink>

        <!-- COMPANY -->
        <article class="imprint-block">
          <span class="section-number">01</span>

          <h2>Angaben gemäß § 5 DDG</h2>

          <div class="company-card">
            <div class="company-icon">
              <Building2 :size="23" :stroke-width="1.4" />
            </div>

            <div class="company-details">
              <h3>{{ company.name }}</h3>

              <p>{{ company.owner }}</p>
              <p>{{ company.street }}</p>
              <p>
                {{ company.postalCode }}
                {{ company.city }}
              </p>
            </div>
          </div>
        </article>

        <!-- CONTACT -->
        <article class="imprint-block">
          <span class="section-number">02</span>

          <h2>Kontakt</h2>

          <p>
            Sie erreichen uns bei Fragen zu unseren
            Catering-Leistungen über folgende
            Kontaktmöglichkeiten:
          </p>

          <div class="contact-list">
            <a :href="`mailto:${company.email}`">
              <div class="contact-icon">
                <Mail :size="19" :stroke-width="1.5" />
              </div>

              <div>
                <span class="contact-label">E-Mail</span>
                <span class="contact-value">
                  {{ company.email }}
                </span>
              </div>
            </a>

            <a :href="`tel:${company.phoneLink}`">
              <div class="contact-icon">
                <Phone :size="19" :stroke-width="1.5" />
              </div>

              <div>
                <span class="contact-label">Telefon</span>
                <span class="contact-value">
                  {{ company.phone }}
                </span>
              </div>
            </a>
          </div>
        </article>

        <!-- BUSINESS ADDRESS -->
        <article class="imprint-block">
          <span class="section-number">03</span>

          <h2>Geschäftsanschrift</h2>

          <div class="address-row">
            <MapPin :size="20" :stroke-width="1.5" />

            <p>
              {{ company.name }}<br />
              {{ company.street }}<br />
              {{ company.postalCode }} {{ company.city }}
            </p>
          </div>

          <p class="info-text">
            Die angegebene Anschrift ist die
            ladungsfähige Geschäftsanschrift
            des Unternehmens.
          </p>
        </article>

        <!-- ADDITIONAL INFORMATION -->
        <article class="imprint-block">
          <span class="section-number">04</span>

          <h2>Weitere gesetzliche Angaben</h2>

          <p>
            Abhängig von der Unternehmensform
            und der konkreten Geschäftstätigkeit
            können zusätzliche Pflichtangaben
            erforderlich sein, beispielsweise
            eine Umsatzsteuer-Identifikationsnummer,
            Registerangaben oder Angaben zu
            zuständigen Behörden.
          </p>

          <!-- <p class="review-note">
            Dieser Abschnitt ist vor Veröffentlichung
            anhand der tatsächlichen Unternehmensdaten
            zu prüfen und durch die erforderlichen
            konkreten Angaben zu ersetzen.
            Nicht zutreffende Hinweise sollten
            entfernt werden.
          </p> -->
        </article>

        <!-- LEGAL LINKS -->
        <div class="imprint-footer">
          <svg
            class="footer-ornament"
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
          </svg>

          <span lang="ar" dir="rtl">
            عواطف
          </span>

          <h2>Awatef Catering</h2>

          <p>
            Ein Stück Syrien. Mit Liebe serviert.
          </p>

          <RouterLink to="/datenschutz">
            Zur Datenschutzerklärung
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* =====================================
   MAIN PAGE
===================================== */

.imprint-page {
  background: #f7f0e3;
  color: #173f35;
}

/* =====================================
   HERO
===================================== */

.imprint-hero {
  position: relative;
  overflow: hidden;

  padding: 145px 24px 95px;

  background:
    radial-gradient(
      ellipse at 50% 100%,
      rgba(214, 180, 120, 0.11),
      transparent 60%
    ),
    linear-gradient(
      135deg,
      #032f29,
      #06483e,
      #032f29
    );

  text-align: center;
}

.hero-content {
  max-width: 850px;
  margin: 0 auto;
}

.hero-arabic {
  display: block;
  margin-bottom: 12px;

  color: #d6b478;
  font-family: 'Amiri', Georgia, serif;
  font-size: 30px;
}

.imprint-hero h1 {
  margin: 0;

  color: #fff8ed;
  font-family: Georgia, serif;
  font-size: clamp(40px, 5vw, 65px);
  font-weight: 400;
  line-height: 1.2;
}

.imprint-hero p {
  margin: 0;
  color: #e3d8c5;
  font-size: 15px;
  line-height: 1.8;
}

/* =====================================
   HEADER ORNAMENT
===================================== */

.header-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  width: 220px;
  margin: 30px auto;
}

.header-ornament span {
  flex: 1;
  height: 1px;
  background: rgba(214, 180, 120, 0.65);
}

.header-ornament svg,
.footer-ornament {
  width: 29px;
  height: 29px;

  fill: none;
  stroke: #d6b478;
  stroke-width: 1.5;
  stroke-linejoin: round;
}

/* =====================================
   CONTENT
===================================== */

.imprint-content {
  padding: 65px 24px 110px;
}

.content-container {
  max-width: 860px;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 48px;

  color: #a5783f;
  font-size: 13px;
  text-decoration: none;

  transition: color 0.25s ease;
}

.back-link:hover {
  color: #06483e;
}

/* =====================================
   BLOCKS
===================================== */

.imprint-block {
  padding-bottom: 40px;
  margin-bottom: 43px;

  border-bottom: 1px solid #ded0b8;
}

.section-number {
  display: block;
  margin-bottom: 12px;

  color: #b78a4a;
  font-family: Georgia, serif;
  font-size: 15px;
  letter-spacing: 2px;
}

.imprint-block h2 {
  margin: 0 0 22px;

  color: #06483e;
  font-family: Georgia, serif;
  font-size: clamp(24px, 3vw, 31px);
  font-weight: 400;
}

.imprint-block > p,
.info-text {
  color: #5a6158;
  font-size: 14px;
  line-height: 1.9;
}

/* =====================================
   COMPANY CARD
===================================== */

.company-card {
  display: flex;
  align-items: flex-start;
  gap: 22px;

  padding: 28px;

  background: #fff9ee;
  border: 1px solid #e7d9c1;
}

.company-icon,
.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 45px;
  height: 45px;

  border: 1px solid #d7bd8f;
  border-radius: 50%;

  color: #a5783f;
}

.company-details h3 {
  margin: 0 0 13px;

  color: #06483e;
  font-family: Georgia, serif;
  font-size: 23px;
  font-weight: 400;
}

.company-details p {
  margin: 5px 0;
  color: #5a6158;
  font-size: 14px;
  line-height: 1.7;
}

/* =====================================
   CONTACT
===================================== */

.contact-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  margin-top: 24px;
}

.contact-list a {
  display: flex;
  align-items: center;
  gap: 15px;

  min-width: 0;
  padding: 20px;

  background: #fff9ee;
  border: 1px solid #e7d9c1;

  color: #06483e;
  text-decoration: none;

  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.contact-list a:hover {
  transform: translateY(-3px);
  border-color: #b78a4a;
  box-shadow: 0 8px 25px rgba(6, 72, 62, 0.07);
}

.contact-list a > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.contact-label {
  color: #a5783f;
  font-size: 12px;
}

.contact-value {
  color: #06483e;
  font-size: 13px;
  overflow-wrap: anywhere;
}

/* =====================================
   ADDRESS
===================================== */

.address-row {
  display: flex;
  align-items: flex-start;
  gap: 16px;

  margin: 18px 0;
}

.address-row svg {
  flex-shrink: 0;
  color: #a5783f;
}

.address-row p {
  margin: 0;
  color: #244b40;
  font-size: 14px;
  line-height: 1.9;
}

.info-text {
  margin-top: 22px;
}

/* =====================================
   REVIEW NOTE
===================================== */

.imprint-block .review-note {
  margin-top: 20px;
  padding: 15px 18px;

  background: #f0e4ce;
  border-left: 3px solid #b78a4a;

  color: #765b35;
  font-size: 12px;
  line-height: 1.8;
}

/* =====================================
   FOOTER CARD
===================================== */

.imprint-footer {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 55px 25px;

  background: #06483e;
  color: #fff8ed;

  text-align: center;
}

.footer-ornament {
  margin-bottom: 14px;
}

.imprint-footer > span {
  color: #d6b478;
  font-family: 'Amiri', Georgia, serif;
  font-size: 35px;
}

.imprint-footer h2 {
  margin: 8px 0 13px;

  font-family: Georgia, serif;
  font-size: 30px;
  font-weight: 400;
}

.imprint-footer p {
  margin: 0 0 27px;

  color: #e1d9c9;
  font-family: Georgia, serif;
  font-size: 14px;
  font-style: italic;
}

.imprint-footer a {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 13px 25px;

  border: 1px solid #d6b478;

  color: #d6b478;
  font-size: 13px;
  text-decoration: none;

  transition:
    background 0.25s ease,
    color 0.25s ease;
}

.imprint-footer a:hover {
  background: #d6b478;
  color: #06483e;
}

/* =====================================
   MOBILE
===================================== */

@media (max-width: 650px) {
  .imprint-hero {
    padding: 120px 18px 70px;
  }

  .hero-arabic {
    font-size: 25px;
  }

  .imprint-content {
    padding: 40px 18px 75px;
  }

  .back-link {
    margin-bottom: 32px;
  }

  .imprint-block {
    padding-bottom: 30px;
    margin-bottom: 34px;
  }

  .company-card {
    padding: 20px;
    gap: 15px;
  }

  .contact-list {
    grid-template-columns: 1fr;
  }

  .imprint-footer {
    padding: 42px 18px;
  }
}
</style>
