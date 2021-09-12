module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#BD5927',
      secondary: '#C79984',
      terciary: '#DDC5B9'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  "tailwindcss.lint": {
    "tailwindCSS.validate": "warning"
  }
}
