/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',
        secondary: '#c9a84c',
        accent: '#e63946',
        dark: '#0f172a',
        light: '#f8fafc'
      },
      fontFamily: {
        arabic: ['"Cairo"', '"Tajawal"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}