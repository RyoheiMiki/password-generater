/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    black: "#17181A",
    blue: "#1fb6ff",
    purple: "#7e5bef",
    extend: {
      fontFamily: {
        "dot-gothic": ['"DotGothic16"', "sans-serif"],
      },
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  plugins: [],
};
