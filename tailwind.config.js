/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'syphon-blue': '#00A6FB',
        'syphon-green': '#06D6A0',
        'syphon-gold': '#FFD60A',
        'maori-dark': '#0B0C10',
        'maori-gray': '#1F2833',
      },
      fontFamily: {
        'maori': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
