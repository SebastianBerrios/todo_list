/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: "#55847A",
        secundary: "#F5F5F5",
        form: "#88B0A0",
      },
    },
  },
  plugins: [],
};
