// import colors from "tailwindcss/colors";
const esmRequire = require("esm")(module);
const twForms = require("@tailwindcss/forms")({
  strategy: "class",
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'meoh-logo': "url('./src/assets/img/meoh.jpeg')",
        'meoh-icon': "url('./src/assets/img/logo-small.ico')",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      opacity: {
        42: ".42",
      },
      spacing: {
        76: "19rem",
        152: "38rem",
      },
      transitionProperty: {
        height: "height",
      },
      borderRadius: {
        sxl: "0.625rem",
      },
      maxHeight: {
        window: "61.5rem",
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
      maxWidth: {
        window: "38rem",
        "screen-3xl": "1680px",
      },
      margin: {
        "1/2": "50%",
        "1/3": "33.33%",
        "1/4": "25%",
        "1/5": "20%",
        full: "100%",
      },
      padding: {
        "1/2": "50%",
        "1/3": "33.33%",
        "1/4": "25%",
        "1/5": "20%",
        full: "100%",
        1.75: "0.4375rem",
        1.25: "0.3125rem",
        // 24px with base font 14px
        6.5: "1.7143rem",
      },
      boxShadow: {
        "comm-card": "0px 3px 1px rgba(158, 177, 226, 0.5)",
        "task-card": "0px 4px 13px 0px rgba(0, 0, 0, 0.1)",
        funky: "3px 3px 1px rgba(158, 177, 226, 0.5)",
      },
      fontSize: {
        // 10px given a 14px base font
        "2xs": "0.714rem",
        "3.5xl": "2rem",
      },
      flex: {
        "2-in-row": "1 0 45%",
      },
      borderWidth: {
        DEFAULT: "1px",
        6: "6px",
        10: "10px",
      },
      height: {
        "SMS-height": "536px",
        "call-height": "536px",
        "email-height": "598px",
        "calling-height": "536px",
        fill: "398px",
      },
      width: {
        "width-361px": "361px",
        "width-657px": "657px",
        hug: "380px",
      },
      lineHeight: {
        0: "0",
      },
    },
  },
  plugins: [twForms],
  variants: {
    width: ["responsive", "hover", "focus", "active"],
    border: ["hover"],
    extend: {
      textColor: ["active"],
    },
  },
};
