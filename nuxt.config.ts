import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite:{
    plugins: [tailwindcss()]
  },
  devServer:{
    port: 3000,
    host: '0.0.0.0',
  },
  i18n:{
    locales: [
      {code: 'en', language: 'English', dir: 'ltr', file: 'en.json', flag: '/flags/united-states.png'},
      {code: 'tr', language: 'Türkçe', dir: 'ltr', file: 'tr.json', flag: '/flags/turkey.png'},
    ],
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      fallbackLocale: 'en',
    }
  },
  content:{
    preview:{
      api:'https://api.nuxt.studio'
    }
  },
  css: ['~/assets/app.css'],
  modules: ['@nuxtjs/i18n', '@vueuse/nuxt', '@nuxt/content', 'v-gsap-nuxt']
})