/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppin:['popins'],
        satisfy:['satisfy']
      },
      backgroundImage:{
        'bg-sign':"url('./src/assets/gradient-7258997_1920.png')"
      }
    },
  },
  plugins: [],
}