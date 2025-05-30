import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

// Detectar idioma del navegador
const browserLang = navigator.language.split('-')[0] // "en", "es", etc.
const locale = ['en', 'es'].includes(browserLang) ? browserLang : 'es'

const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: 'es',
    messages: { en, es },
})

export default i18n
