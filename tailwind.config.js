/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkishGray: "hsl(309, 5%, 25%)",
        pinkishBlack: "hsl(0, 2%, 17%)",
      },
    },
  },
  plugins: [],
};
