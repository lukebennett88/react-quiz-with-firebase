const tw = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...tw.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
