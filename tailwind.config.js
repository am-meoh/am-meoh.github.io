const { createThemes } = require("tw-colors");
const esmRequire = require("esm")(module);
const colors = require("tailwindcss/colors");
const twForms = require("@tailwindcss/forms")({
  strategy: "class",
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bruno: ["Bruno Ace"], // https://fonts.google.com/specimen/Bruno+Ace
        jersey: ["Jersey 10 Charted", "sans-serif"], // doesnt work
        audiowide: ["Audiowide", "sans-serif"], // https://fonts.google.com/specimen/Audiowide?classification=Display&stroke=Sans+Serif
        orbitron: ["Orbitron"], // https://fonts.google.com/specimen/Orbitron?classification=Display&stroke=Sans+Serif
      },
    },
  },
  plugins: [
    twForms,
    // https://palettes.shecodes.io/
    createThemes(
      {
        light: {
          primary: "#F4F1DE", // bg
          secondary: "#81B29A", // bg
          "pop-primary": colors.rose["400"],
          "pop-secondary": colors.teal["800"],
          // simple: "#E07A5F", // button
          // highlight: "#3D405B", // button
          // normal: "#E07A5F", // text
          // hover: "#49beb7", // text
        },
        dark: {
          primary: colors.neutral["800"],
          secondary: colors.zinc["500"],
          "pop-primary": colors.orange["700"],
          "pop-secondary": colors.teal["300"],
          // soft: colors.orange["400"]
          // simple: "#ec97a6", // button
          // highlight: "#ffab90", // button
          // normal: "#ffcd76", // text
          // hover: "#f9f871", // text
        },
      },
      { defaultTheme: "light" },
    ),
  ],
  variants: {
    width: ["responsive", "hover", "focus", "active"],
    border: ["hover"],
    extend: {
      textColor: ["active"],
    },
  },
};
