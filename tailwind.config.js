/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
      },
      colors: {
        GREY_300: 'hsl(234, 29%, 20%)',
        GREY_200: 'hsl(235, 18%, 26%)',
        GREY_100: 'hsl(231, 7%, 60%)',
        TOMATO: 'hsl(4, 100%, 67%)',
      },
      listStyleImage: {
        checkmark: 'url("./src/assets/icon-list.svg")',
      },
    }
  },
  plugins: [],
}