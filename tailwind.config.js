/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "375px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },

    extend: {
      colors: {
        ...defaultTheme.colors,
      },
      backgroundImage: {
        talktoBackground: "url('../assets/talktobg.svg')",
        bannerBackground: "url('../assets/banner.svg')",
      },
    },
  },
  plugins: [],
};
