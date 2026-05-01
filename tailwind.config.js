/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#2d5a4e',
        accent: '#c9a87c',
        cream: '#f9f7f4',
        dark: 'rgb(45 52 54)',
      },
    },
  },
  plugins: [],
}
