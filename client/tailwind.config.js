/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          sans:['Inter', 'sans-serif'],
        },
      colors: {
        'background': '#F1EFEC',
        'navbar': '#123458',
        'accent': '#D4C9BE',
        'text': '#030303',
        'yellow':'#E8AA42',
      },
    },
  },
  plugins: [],
}

