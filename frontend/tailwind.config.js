const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'darkBlue' : '#06283D',
      'lightBg': '#E5E5E5',
      white: colors.white,
      black: colors.black
    }
  },
  plugins: [],
}