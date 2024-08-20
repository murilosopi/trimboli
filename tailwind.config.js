/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2E412",
        "primary-light": "#F2E966",
        "primary-muted": "#F1EB8D",
        dark: "#120E13",
        light: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
