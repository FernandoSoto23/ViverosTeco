/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,tsx,ts,html}"
  ],
  theme: {
    extend: {
      "size-header" : {
        maxHeader: "768px",
        minHeader: "768px"
      },
      "backgroundImage": {
        backgroundImage: "url('/img/IMG-20240817-WA0034.jpg')",
      }
    },
  },
  plugins: [],
}

