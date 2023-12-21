// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from "./package.json";
import pallete from "./theme/pallete";
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Monitor",
      meta: [
        { hid: "title", name: "title", content: "Monitor" },
        {
          hid: "description",
          name: "description",
          content: "Monitor np",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: ["Monitor", "np"].join(","),
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["@/assets/app.scss"],
  modules: ["nuxt-quasar-ui", "@pinia/nuxt", "nuxt-lodash", "@nuxtjs/i18n"],
  quasar: {
    config: {
      brand: pallete,
    },
  },
  i18n: {
    strategy: "no_prefix",
    defaultLocale: "el",
    lazy: true,
    langDir: "./locales",
    locales: [
      { code: "en", file: "en.json" },
      { code: "el", file: "el.json" },
    ],
  },
  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },
});
