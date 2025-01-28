/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: {
            gold: '#FEEDDB',
            gray: '#F5F5F5',
            lightBlack: '#0F142D'
          },
        }
      }
    },
  plugins: [],
}