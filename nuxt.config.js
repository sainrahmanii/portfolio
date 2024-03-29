export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PORTFOLIO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,minimum-scale=1.0,maximum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Portofolio Husain Rahmani, Husain Rahmani saat ini sebagai Web Developer Enthusiast' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://img.icons8.com/fluency/48/null/hard-working.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@next/dist/aos.css'
      }
    ],
    script: [
      {
        src: "./TW-ELEMENTS-PATH/dist/js/index.min.js",
        body: true
      }
    ],
    htmlAttrs: {
      class: 'scroll-smooth'
    },
    bodyAttrs: {
      class: 'scrollbar scrollbar-thumb-cyan-400 scrollbar-track-cyan-200 scrollbar-thumb-rounded-full scrollbar-w-2',
      oncontextmenu: 'return false',
      onkeydown: 'return false',
      onmousedown: 'return false'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
