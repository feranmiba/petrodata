/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode using class strategy
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#171717",
          secondary: "#262626",
          darkGrey: "#404040",
          lightGrey: "#FAFAFA",
          lightText: "#A3A3A3",
          text: "#FAFAFA",
        },
      },
    },
    plugins: [],
  };
  