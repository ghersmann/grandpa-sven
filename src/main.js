import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import router from './router'
import './assets/style.css'

import en from './locales/en'
import de from './locales/de'

const app = createApp(App)

const currentHost = window.location.hostname
const devMode = currentHost === 'localhost' || currentHost === '127.0.0.1'
const defaultLang = devMode
  ? (new URLSearchParams(window.location.search).get('lang') || 'en')
  : currentHost.includes('empfohlenvonopasven.de')
    ? 'de'
    : 'en'

const i18n = createI18n({
  locale: defaultLang,
  fallbackLocale: 'en',
  messages: { en, de },
})

app.use(router)
app.use(i18n)
app.mount('#app')
