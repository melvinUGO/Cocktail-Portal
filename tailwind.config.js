/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "280px",
        md: "760px",
        lg: "1240px",
      },
      colors: {
        background: "#fffffe",
        headline: "#272343",
        paragraph: "#2d334a",
        button: "#ffd803",
        buttonText: "#272343",
        stroke: "#272343",
        main: "#fffffe",
        highlight: "#ffd803",
        secondary: "#e3f6f5",
        tertiary: "#bae8e8",
      },
    },
  },
  plugins: [],
};
