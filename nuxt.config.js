import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - covid-test-sensitivity',
    title: 'COVID-19 Test Sensitivities',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'COVID-19 Test Sensitivity List based on recent unpublished research' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: "og:type", property: "og:type", content: "article" },
      { hid: "og:url", property: "og:url", content: "https://covid-tests.netlify.app/" },
      { hid: "og:title", property: "og:title", content: "COVID-19 Test Sensitivities" },
      { hid: "og:image", property: "og:image", content: "https://covid-tests.netlify.app/thumbnail.png" },
      {
        hid: "og:description",
        property: "og:description",
        content: "COVID-19 Test Sensitivity List",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: 'COVID-19 Test Sensitivity List based on recent unpublished research' },
      { name: "twitter:title", content: "COVID-19 Test Sensitivities" },
      { name: "twitter:site", content: "@gulyamani" },
      { name: "twitter:image", content: "https://covid-tests.netlify.app/thumbnail.png" },
      { name: "twitter:creator", content: "@gulyamani" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  googleAnalytics: {
    id: "UA-215809900-1"
  },
}
