/** @type {import('tailwindcss').Config}*/
const colors = require("tailwindcss/colors");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: colors.slate,
      },
    },
  },

  plugins: [],
};

module.exports = config;
