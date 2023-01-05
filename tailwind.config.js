/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
