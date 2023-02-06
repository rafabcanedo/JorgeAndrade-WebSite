/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#00ad0C',
      'white': '#FFFFFF',
      'black': '#000000',

      'subtitle': '#878e99',
      'navbar': '#e7eaf6',
      'dark': '#232323',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      jost: ['Jost', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
