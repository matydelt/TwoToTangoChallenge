import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import store from './store'

const app:any=createApp(App).use(store)
const messages = {
    en: {
      message: {
        next: 'next',
        prev:"prev",
        search:"search"
      }
    },
    es: {
      message: {
        next: 'siguiente',
        prev:"previo",
        search:"buscar"
      }
    }
  }

const i18n= createI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })
app.use(store)
app.use(i18n)
app.mount('#app')