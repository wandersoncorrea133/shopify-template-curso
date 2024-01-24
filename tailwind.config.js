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
      height: {
        "h-screen": {
          "h-screen": "100vh"
        }
      },
      backgroundColor: {
        test: {
          50: "#7159c1"
        }
      }
    },
  },
  plugins: [],
}

