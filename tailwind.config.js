const colors = require('tailwindcss/colors');
const theme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      ...theme.colors,
      gray: colors.trueGray,
      green: colors.green,
    },
    extend: {
      height: {
        15: '3.75rem',
      },
      scale: {
        '-1': '-1',
      },
      gridTemplateColumns: {
        playlist:
          '[index] 16px [first] 6fr [var1] 4fr [var2] 3fr [last] minmax(120px,1fr)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
