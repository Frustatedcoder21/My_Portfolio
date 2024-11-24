/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bebasNeue: ["Bebas Neue"," sans-serif"],
        doto: ["Doto", 'sans-serif']
      },
      colors: {
        'red-black': '#0A0A09',
      }
    },
  },
  plugins: [],
}