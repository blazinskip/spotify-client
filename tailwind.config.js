const colors = require("tailwindcss/colors");
const { scale } = require("tailwindcss/defaultTheme");
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      ...theme.colors,
      gray: colors.trueGray,
    },
    extend: {
      scale: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
