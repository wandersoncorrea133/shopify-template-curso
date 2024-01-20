/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      backgroundColor: {
        test: {
          50: "#7159c1"
        }
      }
    },
  },
  plugins: [],
}

