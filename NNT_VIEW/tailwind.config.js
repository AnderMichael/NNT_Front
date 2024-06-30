/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ubuntu"],
      },

      colors: {
        purple: "#8E2AD5",
        guindo: "#AD3C56",
        black: "#242038",
        white: "#F7ECE1",
        gray: "#CAC4CE",
        yellow: "#E8D671",
        whitePurple: "#E9E1EF",
      }
    },
  },
  plugins: [],
};
