const colors = require('tailwindcss/colors');
const theme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...theme.colors,
      gray: colors.trueGray,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
