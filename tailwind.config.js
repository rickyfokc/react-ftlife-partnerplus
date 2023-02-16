/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      md: "960px",
      // => @media (min-width: 960px) { ... }
    },
    extend: {
      colors: {
        primary: "#ef4123",
        orange: "#ef4123",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
