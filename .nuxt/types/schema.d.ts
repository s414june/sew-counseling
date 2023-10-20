import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["formkit"]?: typeof import("@formkit/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["primevue"]?: typeof import("@sfxcode/nuxt-primevue").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("/Users/macbookair/Documents/GitHub/sew-counseling/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@formkit/nuxt", Exclude<NuxtConfig["formkit"], boolean>] | ["@sfxcode/nuxt-primevue", Exclude<NuxtConfig["primevue"], boolean>] | ["/Users/macbookair/Documents/GitHub/sew-counseling/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   "nuxt-simple-sitemap": {
      version: string,

      moduleConfig: {
         isI18nMap: boolean,

         autoLastmod: boolean,

         xsl: string,

         xslTips: boolean,

         cacheTtl: number,

         defaultSitemapsChunkSize: number,

         runtimeCacheStorage: string,

         autoAlternativeLangPrefixes: any,

         credits: boolean,

         defaults: any,

         xslColumns: Array<{

         }>,

         include: Array<any>,

         exclude: Array<any>,

         sitemaps: any,

         sitemapName: string,

         sortEntries: boolean,

         dynamicUrlsApiEndpoint: string,

         urls: Array<any>,

         debug: boolean,

         discoverImages: boolean,
      },

      buildTimeMeta: {
         isNuxtContentDocumentDriven: boolean,

         hasApiRoutesUrl: boolean,

         hasPrerenderedRoutesPayload: boolean,

         prerenderSitemap: boolean,

         version: string,
      },
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },
  }
  interface PublicRuntimeConfig {
   primevue: {
      config: {
         ripple: boolean,
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }