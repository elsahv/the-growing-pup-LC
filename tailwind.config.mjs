/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // screens: {
    //   600: "600px",
    // },

    extend: {
      fontFamily: {
        dmserif: ["DM Serif", "serif"],
        com: ["Comfortaa", "cursive"],
      },
      colors: {
        websiteFocus: "#15616D",
        complimentryTextColor: "#7FFFD4",
        primaryBtn: "#0792a5",
        neutralBase1: "#fbf2c0",
        neutralBase2: "#FFECD1",
        test1: "#f88379",
        test2: "lightgreen",
        orange: "#FF7F50",
      },
    },
  },
  plugins: [],
};
