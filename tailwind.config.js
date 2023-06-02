/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['{js,html,css}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        green: '#255762',
        yellow: '#f5ff50',
        accent: {
          green: '#1E403F',
          yellow: '#E6D120',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
