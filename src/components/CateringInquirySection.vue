
<script setup>
import { reactive, ref } from 'vue'
import {
  Mail,
  Phone,
  ArrowUpRight,
  Send,
  LockKeyhole,
  Heart,
  Leaf,
  CalendarHeart,
  CheckCircle2,
  AlertCircle
} from 'lucide-vue-next'

const contact = {
  email: 'heba.akkab@gmail.com',
  phone: '0172 9058837',
  phoneLink: '+491729058837'
}

const revealed = reactive({
  email: false,
  phone: false
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  occasion: '',
  date: '',
  guests: '',
  message: ''
})

const sending = ref(false)
const success = ref(false)
const error = ref('')

const occasions = [
  'Hochzeit',
  'Geburtstag',
  'Private Feier',
  'Firmenevent',
  'Verlobung',
  'Sonstiges'
]

function resetForm() {
  Object.keys(form).forEach((key) => {
    form[key] = ''
  })
}

async function submitInquiry() {
  if (sending.value) return

  error.value = ''
  success.value = false

  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

  if (!accessKey) {
    error.value =
      'Der Anfrageversand ist noch nicht eingerichtet. Bitte kontaktieren Sie uns per E-Mail oder Telefon.'
    return
  }

  sending.value = true

  try {
    const response = await fetch(
      'https://api.web3forms.com/submit',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Neue Catering-Anfrage – Awatef',
          from_name: 'Awatef Catering Website',
          name: form.name,
          email: form.email,
          phone: form.phone,
          occasion: form.occasion,
          event_date: form.date,
          guests: form.guests,
          message: form.message
        })
      }
    )

    const result = await response.json()

    if (!response.ok || !result.success) {
      throw new Error('Anfrage konnte nicht gesendet werden')
    }

    success.value = true
    resetForm()
  } catch (err) {
    error.value =
      'Leider konnte Ihre Anfrage nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="catering-section"
  >
    <!-- Subtle background decorations -->
    <div class="background-glow"></div>

    <div class="catering-container">
      <!-- LEFT SIDE -->
      <div class="catering-intro">
        <div class="intro-eyebrow">
          <!-- <span class="eyebrow-line"></span> -->
          <span lang="ar" dir="rtl">
            مناسباتكم أجمل مع عواطف
          </span>
        </div>

        <h2>
          Ihr Anlass.
          <br />
          <em>Unsere Leidenschaft.</em>
        </h2>

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

        <p class="intro-description">
          Ob Hochzeit, Geburtstag oder ein besonderer
          Anlass – wir bringen die Aromen Syriens
          auf Ihre Festtafel.

          Erzählen Sie uns von Ihren Wünschen.
          Gemeinsam gestalten wir ein unvergessliches
          kulinarisches Erlebnis.
        </p>

        <!-- FEATURES -->
        <div class="intro-features">
          <div class="feature">
            <div class="feature-icon">
              <Heart :size="20" :stroke-width="1.5" />
            </div>

            <div>
              <h3>Mit Liebe gekocht</h3>
              <p>Traditionelle Rezepte mit Herz</p>
            </div>
          </div>

          <div class="feature">
            <div class="feature-icon">
              <Leaf :size="20" :stroke-width="1.5" />
            </div>

            <div>
              <h3>Frische Zutaten</h3>
              <p>Qualität, die man schmeckt</p>
            </div>
          </div>

          <div class="feature">
            <div class="feature-icon">
              <CalendarHeart
                :size="20"
                :stroke-width="1.5"
              />
            </div>

            <div>
              <h3>Für Ihre besonderen Anlässe</h3>
              <p>Individuell und persönlich</p>
            </div>
          </div>
        </div>

        <!-- CONTACT CARDS -->
        <div class="direct-contact">
          <p class="contact-heading">
            Lieber persönlich Kontakt aufnehmen?
          </p>

          <div class="contact-cards">
            <!-- EMAIL -->
            <div
              class="contact-card"
              :class="{ revealed: revealed.email }"
              @click="revealed.email = !revealed.email"
              @keydown.enter.prevent="
                revealed.email = !revealed.email
              "
              @keydown.space.prevent="
                revealed.email = !revealed.email
              "
              tabindex="0"
              role="button"
              :aria-expanded="revealed.email"
            >
              <div class="contact-card-icon">
                <Mail :size="24" :stroke-width="1.4" />
              </div>

              <span class="contact-card-title">
                E-Mail
              </span>

              <span
                v-if="!revealed.email"
                class="contact-card-hint"
              >
                Kontakt anzeigen
              </span>

              <a
                v-else
                :href="`mailto:${contact.email}`"
                class="contact-card-value"
                @click.stop
              >
                {{ contact.email }}
                <ArrowUpRight :size="14" />
              </a>
            </div>

            <!-- PHONE -->
            <div
              class="contact-card"
              :class="{ revealed: revealed.phone }"
              @click="revealed.phone = !revealed.phone"
              @keydown.enter.prevent="
                revealed.phone = !revealed.phone
              "
              @keydown.space.prevent="
                revealed.phone = !revealed.phone
              "
              tabindex="0"
              role="button"
              :aria-expanded="revealed.phone"
            >
              <div class="contact-card-icon">
                <Phone :size="24" :stroke-width="1.4" />
              </div>

              <span class="contact-card-title">
                Telefon
              </span>

              <span
                v-if="!revealed.phone"
                class="contact-card-hint"
              >
                Kontakt anzeigen
              </span>

              <a
                v-else
                :href="`tel:${contact.phoneLink}`"
                class="contact-card-value"
                @click.stop
              >
                {{ contact.phone }}
                <ArrowUpRight :size="14" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE: FORM -->
      <div class="form-outer">
        <div class="form-card">
          <!-- Form heading -->
          <div class="form-header">
            <svg
              class="form-ornament"
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

            <span class="form-arabic" lang="ar" dir="rtl">
              طلب خدمات تقديم الطعام
            </span>

            <h3>Catering-Anfrage</h3>

            <p>
              Erzählen Sie uns von Ihrem besonderen Anlass.
            </p>
          </div>

          <!-- SUCCESS MESSAGE -->
          <div
            v-if="success"
            class="form-feedback success-feedback"
            role="status"
          >
            <CheckCircle2 :size="23" />

            <div>
              <strong>Vielen Dank für Ihre Anfrage!</strong>
              <p>
                Ihre Nachricht wurde erfolgreich versendet.
                Wir melden uns so bald wie möglich bei Ihnen.
              </p>
            </div>
          </div>

          <!-- ERROR MESSAGE -->
          <div
            v-if="error"
            class="form-feedback error-feedback"
            role="alert"
          >
            <AlertCircle :size="22" />

            <p>{{ error }}</p>
          </div>

          <form
            class="inquiry-form"
            @submit.prevent="submitInquiry"
          >
            <div class="form-grid">
              <!-- NAME -->
              <div class="form-field">
                <label for="inquiry-name">
                  Ihr Name <span>*</span>
                </label>

                <input
                  id="inquiry-name"
                  v-model.trim="form.name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  placeholder="Vor- und Nachname"
                  required
                  maxlength="120"
                />
              </div>

              <!-- EMAIL -->
              <div class="form-field">
                <label for="inquiry-email">
                  E-Mail-Adresse <span>*</span>
                </label>

                <input
                  id="inquiry-email"
                  v-model.trim="form.email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  placeholder="name@beispiel.de"
                  required
                  maxlength="254"
                />
              </div>

              <!-- PHONE -->
              <div class="form-field">
                <label for="inquiry-phone">
                  Telefonnummer
                </label>

                <input
                  id="inquiry-phone"
                  v-model.trim="form.phone"
                  type="tel"
                  name="phone"
                  autocomplete="tel"
                  placeholder="0176 ..."
                  maxlength="40"
                />
              </div>

              <!-- OCCASION -->
              <div class="form-field">
                <label for="inquiry-occasion">
                  Anlass <span>*</span>
                </label>

                <select
                  id="inquiry-occasion"
                  v-model="form.occasion"
                  name="occasion"
                  required
                >
                  <option disabled value="">
                    Bitte auswählen
                  </option>

                  <option
                    v-for="occasion in occasions"
                    :key="occasion"
                    :value="occasion"
                  >
                    {{ occasion }}
                  </option>
                </select>
              </div>

              <!-- DATE -->
              <div class="form-field">
                <label for="inquiry-date">
                  Veranstaltungsdatum
                </label>

                <input
                  id="inquiry-date"
                  v-model="form.date"
                  type="date"
                  name="event_date"
                />
              </div>

              <!-- GUESTS -->
              <div class="form-field">
                <label for="inquiry-guests">
                  Gästezahl
                </label>

                <input
                  id="inquiry-guests"
                  v-model="form.guests"
                  type="number"
                  name="guests"
                  min="1"
                  max="100000"
                  placeholder="z. B. 50"
                />
              </div>

              <!-- MESSAGE -->
              <div class="form-field full-width">
                <label for="inquiry-message">
                  Ihre Wünsche und Nachricht <span>*</span>
                </label>

                <textarea
                  id="inquiry-message"
                  v-model.trim="form.message"
                  name="message"
                  rows="5"
                  required
                  maxlength="5000"
                  placeholder="Erzählen Sie uns von Ihrem Anlass, Ihren gewünschten Gerichten und besonderen Wünschen ..."
                ></textarea>
              </div>
            </div>

            <!-- SUBMIT -->
            <button
              type="submit"
              class="submit-button"
              :disabled="sending"
            >
              <span>
                {{
                  sending
                    ? 'Anfrage wird gesendet ...'
                    : 'Anfrage senden'
                }}
              </span>

              <Send
                v-if="!sending"
                :size="17"
                :stroke-width="1.7"
              />

              <span
                v-else
                class="loading-spinner"
                aria-hidden="true"
              ></span>
            </button>

            <!-- PRIVACY NOTICE -->
            <div class="privacy-notice">
              <LockKeyhole
                :size="15"
                :stroke-width="1.6"
              />

              <p>
                Wir verwenden Ihre Angaben zur Bearbeitung
                Ihrer Catering-Anfrage.
                Weitere Informationen finden Sie in unserer
                <RouterLink to="/datenschutz">
                  Datenschutzerklärung
                </RouterLink>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
/* =====================================
   MAIN SECTION
===================================== */

.catering-section {
  position: relative;
  isolation: isolate;
  overflow: hidden;

  background: linear-gradient(
    135deg,
    var(--awatef-green-700) 0%,
    var(--awatef-green-500) 48%,
    var(--awatef-green-700) 100%
  );

  padding: 110px 24px 120px;
  scroll-margin-top: 90px;
}

.background-glow {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  background:
    radial-gradient(
      ellipse at 12% 35%,
      color-mix(in srgb, var(--awatef-gold) 12%, transparent),
      transparent 48%
    ),
    radial-gradient(
      ellipse at 85% 85%,
      color-mix(in srgb, var(--awatef-gold) 8%, transparent),
      transparent 40%
    );
}

.catering-container {
  position: relative;
  z-index: 1;
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns:
    minmax(0, 0.92fr)
    minmax(0, 1.08fr);
  align-items: center;
  gap: clamp(50px, 6vw, 110px);
}

/* =====================================
   LEFT INTRO
===================================== */

.catering-intro {
  color: var(--awatef-cream);
}

.intro-eyebrow {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 22px;

  color: var(--awatef-gold);
  font-family: 'Amiri', Georgia, serif;
  font-size: 24px;
}

.eyebrow-line {
  width: 42px;
  height: 1px;
  background: var(--awatef-gold);
}

.catering-intro h2 {
  margin: 0;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(38px, 4vw, 62px);
  font-weight: 400;
  line-height: 1.17;
  letter-spacing: -1.5px;
}

.catering-intro h2 em {
  color: var(--awatef-gold);
  font-style: italic;
  font-weight: 400;
}

/* =====================================
   HEADER ORNAMENT
===================================== */

.header-ornament {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  margin: 30px 0;
}

.header-ornament span {
  flex: 1;
  height: 1px;
  background: color-mix(
    in srgb,
    var(--awatef-gold) 70%,
    transparent
  );
}

.header-ornament svg {
  width: 26px;
  height: 26px;
  stroke: var(--awatef-gold);
  stroke-width: 1.5;
  stroke-linejoin: round;
}

.intro-description {
  max-width: 480px;
  margin: 0;
  color: var(--awatef-cream);
  font-size: 15px;
  line-height: 2;
  white-space: pre-line;
}

/* =====================================
   FEATURES
===================================== */

.intro-features {
  display: flex;
  flex-direction: column;
  gap: 23px;
  margin-top: 38px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 17px;
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  border: 1px solid color-mix(
    in srgb,
    var(--awatef-gold) 45%,
    transparent
  );

  border-radius: 50%;
  color: var(--awatef-gold);
}

.feature h3 {
  margin: 0 0 4px;
  font-family: Georgia, serif;
  font-size: 17px;
  font-weight: 400;
  color: var(--awatef-cream);
}

.feature p {
  margin: 0;
  font-size: 12px;
  color: var(--awatef-cream-dark);
}

/* =====================================
   DIRECT CONTACT
===================================== */

.direct-contact {
  margin-top: 50px;
}

.contact-heading {
  margin: 0 0 18px;
  color: var(--awatef-cream);
  font-family: Georgia, serif;
  font-size: 18px;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;
}

.contact-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 150px;
  padding: 22px 10px;

  background: color-mix(
    in srgb,
    var(--awatef-cream) 4%,
    transparent
  );

  border: 1px solid color-mix(
    in srgb,
    var(--awatef-gold) 38%,
    transparent
  );

  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  transition:
    transform 0.35s ease,
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.contact-card:hover,
.contact-card:focus-visible,
.contact-card.revealed {
  transform: translateY(-5px);

  background: color-mix(
    in srgb,
    var(--awatef-gold) 12%,
    transparent
  );

  border-color: var(--awatef-gold);

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.contact-card:focus-visible {
  outline: 2px solid var(--awatef-gold);
  outline-offset: 4px;
}

.contact-card-icon {
  margin-bottom: 12px;
  color: var(--awatef-gold);
  transition: transform 0.3s ease;
}

.contact-card:hover .contact-card-icon {
  transform: scale(1.12);
}

.contact-card-title {
  margin-bottom: 8px;
  font-family: Georgia, serif;
  font-size: 17px;
  color: var(--awatef-cream);
}

.contact-card-hint {
  font-size: 12px;
  color: var(--awatef-gold);
}

.contact-card-value {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  max-width: 100%;

  color: var(--awatef-gold-light);
  font-size: 12px;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.contact-card-value:hover {
  text-decoration: underline;
}

/* =====================================
   FORM OUTER
===================================== */

.form-outer {
  position: relative;
  min-width: 0;
  padding: 7px;

  border: 1px solid color-mix(
    in srgb,
    var(--awatef-gold) 60%,
    transparent
  );

  border-radius: 230px 230px 8px 8px;
}

.form-card {
  position: relative;
  padding: 78px clamp(24px, 4vw, 50px) 42px;

  background: var(--awatef-cream);
  color: var(--awatef-green-700);

  border-radius: 225px 225px 4px 4px;
}

/* =====================================
   FORM HEADER
===================================== */

.form-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
  text-align: center;
}

.form-ornament {
  width: 36px;
  height: 36px;
  margin-bottom: 13px;

  stroke: var(--awatef-gold-dark);
  stroke-width: 1.5;
  stroke-linejoin: round;
}

.form-arabic {
  font-family: 'Amiri', Georgia, serif;
  font-size: 25px;
  color: var(--awatef-gold-dark);
}

.form-header h3 {
  margin: 6px 0 10px;
  font-family: Georgia, serif;
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 400;
  line-height: 1.2;
}

.form-header p {
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
  color: var(--awatef-green-700);
}

/* =====================================
   FORM FIELDS
===================================== */

.inquiry-form {
  width: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px 18px;
}

.form-field {
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 9px;
}

.form-field.full-width {
  grid-column: 1 / -1;
}

.form-field label {
  color: var(--awatef-green-700);
  font-size: 12px;
  font-weight: 600;
}

.form-field label span {
  color: var(--awatef-gold-dark);
}

.form-field input,
.form-field select,
.form-field textarea {
  width: 100%;
  min-width: 0;
  padding: 13px 14px;

  background: var(--awatef-cream);
  border: 1px solid var(--awatef-cream-dark);
  border-radius: 3px;

  color: var(--awatef-green-700);
  font-family: inherit;
  font-size: 13px;
  outline: none;

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.form-field input,
.form-field select {
  min-height: 47px;
}

.form-field textarea {
  min-height: 130px;
  resize: vertical;
  line-height: 1.7;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: color-mix(
    in srgb,
    var(--awatef-green-700) 50%,
    var(--awatef-cream)
  );
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  border-color: var(--awatef-gold-dark);

  box-shadow: 0 0 0 3px color-mix(
    in srgb,
    var(--awatef-gold) 20%,
    transparent
  );
}

.form-field select {
  cursor: pointer;
}

.form-field input[type='date'] {
  color-scheme: light;
}

/* =====================================
   SUBMIT BUTTON
===================================== */

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  min-height: 54px;
  margin-top: 27px;
  padding: 15px 20px;

  border: none;
  border-radius: 3px;

  background: linear-gradient(
    110deg,
    var(--awatef-gold-dark),
    var(--awatef-gold),
    var(--awatef-gold-dark)
  );

  color: var(--awatef-green-700);
  font-family: Georgia, serif;
  font-size: 16px;
  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    filter 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  filter: brightness(1.04);

  box-shadow: 0 10px 24px color-mix(
    in srgb,
    var(--awatef-gold-dark) 25%,
    transparent
  );
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: wait;
}

.loading-spinner {
  width: 17px;
  height: 17px;

  border: 2px solid color-mix(
    in srgb,
    var(--awatef-green-700) 20%,
    transparent
  );

  border-top-color: var(--awatef-green-700);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* =====================================
   PRIVACY NOTICE
===================================== */

.privacy-notice {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 18px;

  color: var(--awatef-green-700);
  font-size: 11px;
  line-height: 1.8;
}

.privacy-notice svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--awatef-gold-dark);
}

.privacy-notice p {
  margin: 0;
}

.privacy-notice a {
  color: var(--awatef-green-700);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.privacy-notice a:hover {
  color: var(--awatef-gold-dark);
}

/* =====================================
   FEEDBACK
===================================== */

.form-feedback {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 24px;
  padding: 16px;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.7;
}

.form-feedback svg {
  flex-shrink: 0;
}

.form-feedback p {
  margin: 4px 0 0;
}

.success-feedback {
  background: #e8f2e9;
  border: 1px solid #b4d4b7;
  color: #285c3a;
}

.error-feedback {
  background: #fff0ed;
  border: 1px solid #e8c3bc;
  color: #923b32;
}

/* =====================================
   TABLET
===================================== */

@media (max-width: 1000px) {
  .catering-container {
    grid-template-columns: 1fr;
    gap: 65px;
    max-width: 680px;
  }

  .catering-section {
    padding: 85px 22px;
  }

  .catering-intro {
    text-align: center;
  }

  .intro-eyebrow,
  .header-ornament {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }

  .intro-description {
    margin-left: auto;
    margin-right: auto;
  }

  .intro-features {
    max-width: 390px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }

  .direct-contact {
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }
}

/* =====================================
   MOBILE
===================================== */

@media (max-width: 600px) {
  .catering-section {
    padding: 65px 15px 75px;
  }

  .catering-container {
    gap: 48px;
  }

  .intro-eyebrow {
    font-size: 21px;
  }

  .catering-intro h2 {
    font-size: clamp(34px, 8vw, 46px);
  }

  .intro-description {
    font-size: 14px;
    line-height: 1.9;
  }

  .intro-features {
    gap: 20px;
    margin-top: 30px;
  }

  .direct-contact {
    margin-top: 38px;
  }

  .contact-heading {
    font-size: 16px;
  }

  .contact-cards {
    gap: 10px;
  }

  .contact-card {
    min-height: 135px;
    padding: 18px 8px;
  }

  .contact-card-value {
    font-size: 11px;
  }

  .form-outer {
    padding: 5px;
    border-radius: 170px 170px 6px 6px;
  }

  .form-card {
    padding: 65px 19px 30px;
    border-radius: 165px 165px 3px 3px;
  }

  .form-header {
    margin-bottom: 30px;
  }

  .form-header h3 {
    font-size: 29px;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .form-field.full-width {
    grid-column: auto;
  }
}

/* =====================================
   REDUCED MOTION
===================================== */

@media (prefers-reduced-motion: reduce) {
  .contact-card,
  .contact-card-icon,
  .submit-button,
  .loading-spinner {
    transition: none;
    animation: none;
  }
}
</style>
