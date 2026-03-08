/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'worksans': ['Work Sans', 'sans-serif'],
      },
      colors: {
        'oorOrange': '#ea580c',
      }
    },
  },
  plugins: [],
}