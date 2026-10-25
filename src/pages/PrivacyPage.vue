<template>
  <main class="privacy-page">
    <!-- HERO -->
    <section class="privacy-hero">
      <div class="hero-content">
        <span class="hero-arabic" lang="ar" dir="rtl">
          سياسة الخصوصية
        </span>

        <h1>Datenschutzerklärung</h1>

        <div class="ornament" aria-hidden="true">
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

        <p>
          Der Schutz Ihrer persönlichen Daten
          liegt uns am Herzen.
        </p>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="privacy-content">
      <div class="content-container">
        <RouterLink to="/" class="back-link">
          <ArrowLeft :size="17" />
          Zurück zur Startseite
        </RouterLink>

        <div class="privacy-intro">
          <ShieldCheck :size="27" :stroke-width="1.4" />

          <p>
            Mit dieser Datenschutzerklärung informieren
            wir Sie darüber, wie personenbezogene Daten
            beim Besuch unserer Website und bei einer
            Kontaktaufnahme verarbeitet werden.
          </p>
        </div>

        <!-- 1 -->
        <article class="privacy-block">
          <span class="section-number">01</span>
          <h2>Verantwortliche Stelle</h2>

          <p>
            Verantwortlich für die Verarbeitung
            personenbezogener Daten auf dieser
            Website ist:
          </p>

          <div class="contact-details">
            <strong>{{ contact.business }}</strong>
            <span>{{ contact.responsible }}</span>
            <span>{{ contact.street }}</span>
            <span>{{ contact.city }}</span>

            <a :href="`mailto:${contact.email}`">
              {{ contact.email }}
            </a>

            <a href="tel:+491729058837">
              {{ contact.phone }}
            </a>
          </div>
        </article>

        <!-- 2 -->
        <article class="privacy-block">
          <span class="section-number">02</span>
          <h2>Allgemeine Hinweise zur Datenverarbeitung</h2>

          <p>
            Wir verarbeiten personenbezogene Daten nur,
            soweit dies für den Betrieb unserer Website,
            die Bearbeitung von Anfragen oder die
            Durchführung unserer Catering-Leistungen
            erforderlich ist oder eine andere
            Rechtsgrundlage besteht.
          </p>

          <p>
            Zu den personenbezogenen Daten gehören
            insbesondere Name, E-Mail-Adresse,
            Telefonnummer und Informationen,
            die Sie uns im Rahmen einer
            Catering-Anfrage mitteilen.
          </p>
        </article>

        <!-- 3 -->
        <article class="privacy-block">
          <span class="section-number">03</span>
          <h2>Hosting und technische Zugriffsdaten</h2>

          <p>
            Beim Aufruf unserer Website können durch
            den Hostinganbieter technisch erforderliche
            Informationen verarbeitet werden.
            Dazu können insbesondere IP-Adresse,
            Datum und Uhrzeit des Zugriffs,
            aufgerufene Seiten sowie Informationen
            über Browser und Betriebssystem gehören.
          </p>

          <p>
            Die Verarbeitung dient der Bereitstellung,
            Stabilität und Sicherheit der Website.
            Als Rechtsgrundlage kommt Art. 6 Abs. 1
            lit. f DSGVO in Betracht.
          </p>

          <!-- <p class="review-note">
            Vor Veröffentlichung ergänzen:
            Name und Anschrift des Hostinganbieters,
            gegebenenfalls Empfänger und Drittlandtransfers
            sowie die tatsächliche Speicherdauer
            der Serverprotokolle.
          </p> -->
        </article>

        <!-- 4 -->
        <article class="privacy-block">
          <span class="section-number">04</span>
          <h2>Catering-Anfrageformular</h2>

          <p>
            Wenn Sie unser Catering-Anfrageformular
            verwenden, verarbeiten wir die von Ihnen
            angegebenen Informationen:
          </p>

          <ul>
            <li>Name und E-Mail-Adresse</li>
            <li>Telefonnummer, falls angegeben</li>
            <li>Art des Anlasses</li>
            <li>Veranstaltungsdatum, falls angegeben</li>
            <li>Gästezahl, falls angegeben</li>
            <li>Ihre Nachricht und individuellen Wünsche</li>
          </ul>

          <p>
            Wir verwenden diese Angaben, um Ihre Anfrage
            zu bearbeiten, Rückfragen zu stellen und
            gegebenenfalls ein Catering-Angebot
            vorzubereiten.
          </p>

          <p>
            Die Verarbeitung erfolgt grundsätzlich
            auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
            zur Durchführung vorvertraglicher Maßnahmen
            auf Ihre Anfrage.
          </p>

          <p>
            Die als Pflichtfelder gekennzeichneten
            Angaben benötigen wir, um Ihre Anfrage
            sinnvoll bearbeiten und beantworten zu können.
            Ohne diese Angaben kann eine Bearbeitung
            gegebenenfalls nicht erfolgen.
          </p>
        </article>

        <!-- 5 -->
        <article class="privacy-block">
          <span class="section-number">05</span>
          <h2>Formularversand über Web3Forms</h2>

          <p>
            Für die technische Übermittlung von
            Catering-Anfragen setzen wir Web3Forms
            ein, einen Dienst von Web3Creative
            mit Sitz in Indien.
          </p>

          <p>
            Wenn Sie das Formular absenden,
            werden Ihre eingegebenen Daten an
            Web3Forms übermittelt und zur Bearbeitung
            Ihrer Anfrage an unser E-Mail-Postfach
            weitergeleitet.
          </p>

          <p>
            Web3Forms verwendet technische
            Dienstleister für Hosting, E-Mail-Versand
            und Sicherheitsmaßnahmen. Dabei können
            personenbezogene Daten auch außerhalb
            des Europäischen Wirtschaftsraums
            verarbeitet werden.
          </p>

          <p>
            Weitere Informationen finden Sie in der
            <a
              href="https://web3forms.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung von Web3Forms
            </a>.
          </p>
        </article>

        <!-- 6 -->
        <article class="privacy-block">
          <span class="section-number">06</span>
          <h2>Kontaktaufnahme per E-Mail oder Telefon</h2>

          <p>
            Wenn Sie uns per E-Mail oder telefonisch
            kontaktieren, verarbeiten wir Ihre
            Kontaktdaten und die von Ihnen übermittelten
            Informationen zur Bearbeitung Ihres Anliegens.
          </p>

          <p>
            Bei Anfragen zu unseren Catering-Leistungen
            erfolgt dies grundsätzlich auf Grundlage
            von Art. 6 Abs. 1 lit. b DSGVO.
            Bei sonstigen geschäftlichen Anfragen
            kann Art. 6 Abs. 1 lit. f DSGVO
            einschlägig sein.
          </p>

          <p>
            Bei der E-Mail-Kommunikation können
            außerdem Daten durch die beteiligten
            E-Mail-Dienstleister verarbeitet werden.
          </p>
        </article>

        <!-- 7 -->
        <article class="privacy-block">
          <span class="section-number">07</span>
          <h2>Inhalte über Sanity CMS</h2>

          <p>
            Zur Verwaltung unserer Speisekarte,
            Kategorien, Beschreibungen und Bilder
            verwenden wir das Content-Management-System
            Sanity.
          </p>

          <p>
            Je nach technischer Einbindung können
            Inhalte und Bilder von Servern
            des Anbieters geladen werden.
            Dabei können technische Verbindungsdaten,
            insbesondere die IP-Adresse,
            an den jeweiligen Dienst übermittelt werden.
          </p>

        </article>

        <!-- 8 -->
        <article class="privacy-block">
          <span class="section-number">08</span>
          <h2>Cookies und externe Dienste</h2>

          <p>
            Ob und welche Cookies oder vergleichbaren
            Technologien eingesetzt werden, hängt
            von der tatsächlichen technischen
            Konfiguration unserer Website ab.
          </p>

          <p>
            Soweit wir externe Schriftarten,
            Analysewerkzeuge, eingebettete Inhalte
            oder andere Drittanbieter-Dienste verwenden,
            informieren wir hier über deren
            Funktionsweise und die damit verbundene
            Datenverarbeitung.
          </p>
        </article>

        <!-- 9 -->
        <article class="privacy-block">
          <span class="section-number">09</span>
          <h2>Speicherdauer</h2>

          <p>
            Wir speichern personenbezogene Daten
            grundsätzlich nur so lange, wie dies
            für den jeweiligen Verarbeitungszweck
            erforderlich ist.
          </p>

          <p>
            Daten aus Catering-Anfragen werden
            nach Abschluss der Bearbeitung gelöscht,
            soweit keine gesetzlichen
            Aufbewahrungspflichten oder andere
            berechtigte Gründe für eine weitere
            Speicherung bestehen.
          </p>

          <p>
            Kommt ein Vertragsverhältnis zustande,
            können für bestimmte geschäftliche
            Unterlagen gesetzliche Aufbewahrungsfristen
            gelten.
          </p>

        </article>

        <!-- 10 -->
        <article class="privacy-block">
          <span class="section-number">10</span>
          <h2>Ihre Datenschutzrechte</h2>

          <p>
            Nach Maßgabe der gesetzlichen
            Voraussetzungen stehen Ihnen
            insbesondere folgende Rechte zu:
          </p>

          <ul>
            <li>Auskunft über Ihre personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung personenbezogener Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen bestimmte Verarbeitungen</li>
            <li>
              Widerruf einer erteilten Einwilligung
              mit Wirkung für die Zukunft
            </li>
          </ul>

          <p>
            Sie haben außerdem das Recht,
            sich bei einer zuständigen
            Datenschutzaufsichtsbehörde
            zu beschweren.
          </p>

          <p>
            Für Fragen zur Verarbeitung Ihrer Daten
            können Sie uns jederzeit kontaktieren.
          </p>
        </article>

        <!-- 11 -->
        <article class="privacy-block">
          <span class="section-number">11</span>
          <h2>Aktualisierung dieser Datenschutzerklärung</h2>

          <p>
            Wir passen diese Datenschutzerklärung
            bei Bedarf an, beispielsweise wenn
            sich rechtliche Anforderungen oder
            die von uns eingesetzten technischen
            Dienste ändern.
          </p>
        </article>

        <!-- CONTACT FOOTER -->
        <div class="privacy-contact">
          <div class="contact-ornament">
            <svg viewBox="0 0 64 64" fill="none">
              <path
                d="M32 3 41 23 61 32 41 41 32 61 23 41 3 32 23 23Z"
              />
              <path
                d="M32 14 38 26 50 32 38 38 32 50 26 38 14 32 26 26Z"
              />
              <path d="M32 23V41M23 32H41"/>
            </svg>
          </div>

          <span lang="ar" dir="rtl">
            نحن هنا من أجلكم
          </span>

          <h2>Haben Sie noch Fragen?</h2>

          <p>
            Bei Fragen zum Datenschutz können
            Sie uns gerne direkt kontaktieren.
          </p>

          <a :href="`mailto:${contact.email}`">
            <Mail :size="18" />
            {{ contact.email }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>


<script setup>
import { ArrowLeft, Mail, ShieldCheck } from 'lucide-vue-next'

const contact = {
  business: 'Awatef Catering',
  responsible: 'Hebatullah Alakkab',
  street: 'Mannheimer Straße198',
  city: ' 67657 Kaiseralautern',
  email: 'heba.akkab@gmail.com',
  phone: '0172 9058837'
}
</script>


<style scoped>
/* ===================================
   PAGE
=================================== */

.privacy-page {
  background: var(--awatef-cream);
  color: var(--awatef-green-700);
}

/* ===================================
   HERO
=================================== */

.privacy-hero {
  position: relative;
  overflow: hidden;

  padding: 95px 24px;

  background:
    radial-gradient(
      ellipse at 50% 100%,
      color-mix(
        in srgb,
        var(--awatef-gold) 11%,
        transparent
      ),
      transparent 60%
    ),
    linear-gradient(
      135deg,
      var(--awatef-green-700),
      var(--awatef-green-500),
      var(--awatef-green-700)
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

  color: var(--awatef-gold);
  font-family: 'Amiri', Georgia, serif;
  font-size: 30px;
}

.privacy-hero h1 {
  margin: 0;

  color: var(--awatef-cream);
  font-family: Georgia, serif;
  font-size: clamp(37px, 5vw, 65px);
  font-weight: 400;
  line-height: 1.2;
}

.privacy-hero p {
  margin: 0;

  color: var(--awatef-cream-dark);
  font-size: 15px;
  line-height: 1.8;
}

/* ===================================
   ORNAMENT
=================================== */

.ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  width: 220px;
  margin: 30px auto;
}

.ornament span {
  flex: 1;
  height: 1px;

  background: color-mix(
    in srgb,
    var(--awatef-gold) 65%,
    transparent
  );
}

.ornament svg,
.contact-ornament svg {
  width: 29px;
  height: 29px;

  fill: none;
  stroke: var(--awatef-gold);
  stroke-width: 1.5;
  stroke-linejoin: round;
}

/* ===================================
   CONTENT
=================================== */

.privacy-content {
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

  margin-bottom: 45px;

  color: var(--awatef-gold-dark);
  font-size: 13px;
  text-decoration: none;

  transition: color 0.2s ease;
}

.back-link:hover {
  color: var(--awatef-green-700);
}

.privacy-intro {
  display: flex;
  align-items: flex-start;
  gap: 18px;

  margin-bottom: 55px;
  padding: 25px 28px;

  border-left: 2px solid var(--awatef-gold-dark);
  background: var(--awatef-cream-dark);
}

.privacy-intro svg {
  flex-shrink: 0;
  color: var(--awatef-gold-dark);
}

.privacy-intro p {
  margin: 0;

  color: var(--awatef-green-700);
  font-size: 14px;
  line-height: 1.9;
}

/* ===================================
   PRIVACY BLOCKS
=================================== */

.privacy-block {
  padding: 0 0 38px;
  margin-bottom: 42px;

  border-bottom: 1px solid color-mix(
    in srgb,
    var(--awatef-gold-dark) 35%,
    transparent
  );
}

.section-number {
  display: block;
  margin-bottom: 12px;

  color: var(--awatef-gold-dark);
  font-family: Georgia, serif;
  font-size: 15px;
  letter-spacing: 2px;
}

.privacy-block h2 {
  margin: 0 0 20px;

  color: var(--awatef-green-700);
  font-family: Georgia, serif;
  font-size: clamp(23px, 3vw, 30px);
  font-weight: 400;
  line-height: 1.35;
}

.privacy-block p,
.privacy-block li {
  color: var(--awatef-green-700);
  font-size: 14px;
  line-height: 2;
}

.privacy-block p {
  margin: 0 0 16px;
}

.privacy-block ul {
  margin: 12px 0 22px;
  padding-left: 22px;
}

.privacy-block li {
  padding-left: 4px;
  margin-bottom: 5px;
}

.privacy-block li::marker {
  color: var(--awatef-gold-dark);
}

.privacy-block a {
  color: var(--awatef-green-700);
  text-decoration: underline;
  text-underline-offset: 3px;
  overflow-wrap: anywhere;
}

.privacy-block a:hover {
  color: var(--awatef-gold-dark);
}

/* ===================================
   CONTACT DETAILS
=================================== */

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 7px;

  padding: 20px 24px;
  margin-top: 18px;

  background: var(--awatef-cream-dark);
  border: 1px solid var(--awatef-gold);

  color: var(--awatef-green-700);
  font-size: 14px;
  line-height: 1.6;
}

.contact-details strong {
  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 400;
}

/* ===================================
   CONTACT FOOTER
=================================== */

.privacy-contact {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 52px 25px;

  background: var(--awatef-green-700);
  color: var(--awatef-cream);

  text-align: center;
}

.contact-ornament {
  margin-bottom: 14px;
}

.privacy-contact > span {
  color: var(--awatef-gold);
  font-family: 'Amiri', Georgia, serif;
  font-size: 24px;
}

.privacy-contact h2 {
  margin: 10px 0 15px;

  font-family: Georgia, serif;
  font-size: clamp(25px, 3vw, 34px);
  font-weight: 400;
}

.privacy-contact p {
  max-width: 420px;
  margin: 0 0 25px;

  color: var(--awatef-cream-dark);
  font-size: 14px;
  line-height: 1.8;
}

.privacy-contact a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 11px;

  max-width: 100%;
  padding: 14px 24px;

  border: 1px solid var(--awatef-gold);

  color: var(--awatef-gold);
  font-size: 14px;
  text-decoration: none;
  overflow-wrap: anywhere;

  transition:
    background 0.25s ease,
    color 0.25s ease;
}

.privacy-contact a:hover {
  background: var(--awatef-gold);
  color: var(--awatef-green-700);
}

/* ===================================
   MOBILE
=================================== */

@media (max-width: 650px) {
  .privacy-hero {
    padding: 120px 18px 70px;
  }

  .hero-arabic {
    font-size: 25px;
  }

  .privacy-content {
    padding: 40px 18px 75px;
  }

  .back-link {
    margin-bottom: 30px;
  }

  .privacy-intro {
    padding: 20px 17px;
    gap: 12px;
  }

  .privacy-block {
    margin-bottom: 34px;
    padding-bottom: 30px;
  }

  .privacy-block p,
  .privacy-block li {
    font-size: 13px;
  }

  .contact-details {
    padding: 18px;
  }

  .privacy-contact {
    padding: 42px 18px;
  }
}
</style>
