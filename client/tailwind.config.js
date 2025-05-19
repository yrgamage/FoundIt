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
        'primary': '#D98324',
        'secondary': '#EFDCAB',
        'accent': '#442637',
        'background': '#F2F6D0',
        'text': '#14171A',
      },
    },
  },
  plugins: [],
}

