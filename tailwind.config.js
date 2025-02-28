/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      fontFamily: { spaceMono: ["Space Mono", "monospace"] },
      fontWeight: { 700: "700" },
      colors: {
        primary: {
          cyan: "hsl(172, 67%, 45%)",
        },
        neutral: {
          "very-dark-cyan": "hsl(183, 100%, 15%)",
          "dark-grayish-cyan": "hsl(186, 14%, 43%)",
          "grayish-cyan": "hsl(184, 14%, 56%)",
          "light-grayish-cyan": "hsl(185, 41%, 84%)",
          "very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        },
      },
      fontSize: {
        formInputs: "24px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-arrows": {
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: "0",
          },
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: "0",
          },
          '&[type="number"]': {
            "-moz-appearance": "textfield",
          },
        },
      });
    },
  ],
};
