/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair', 'sans-serif']
      },
      screens :{
        'xs' : {'min':'390px','max':'639px'}
      }
    },
  },
  plugins: [],
}