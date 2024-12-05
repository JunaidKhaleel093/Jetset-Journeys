/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display"', 'serif', 'Montserrat', 'Philosopher', 'Alegreya', 'sans-serif' ],
        yuji: ['"Yuji Mai"', 'serif'],
      },
      colors: {
        primary: "#121212", 
        secondary: "#E9C46A",
        dark: {
          DEFAULT: "#0F172A",
          accent: "#414a4c",
          lighter: "#334155"
        },
        light: {
          DEFAULT: "#E2E8F0",
          accent: "#F1F5F9"
        }
      },
    },
  },
  plugins: [],
}
        