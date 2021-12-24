module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: "media",
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
