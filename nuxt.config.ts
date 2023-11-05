// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site:{
    url:"sew-counseling.com"
  },
  devtools: { enabled: true },
  css: [
    "primevue/resources/primevue.css",
    "primevue/resources/themes/saga-blue/theme.css",
    "primeicons/primeicons.css",
    "@sfxcode/formkit-primevue/dist/sass/formkit-prime-inputs.scss",
    "@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss",
    "~/assets/styles/main.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@formkit/nuxt", "@sfxcode/nuxt-primevue","nuxt-simple-sitemap"],
  primevue: {
    config: {
      ripple: true,
    },
  },
  build: {
    transpile: ["primevue"],
  },
  $meta:{
    title:"SEW顧問中心",
    meta:{
      name:"description",
      content:"我們致力於協助客戶處理與解決社會團體(social groups)、親職教育(education)、文書代繕(writing)等需要專業處理的各項事務與疑難雜症。服務項目包含：社團申請、長照立案、文書代筆、工商登記、簡報設計、親職教育。"
    }
  }
});
