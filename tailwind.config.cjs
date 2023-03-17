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
      'navbar': '#e3e3e3',
      'dark': '#232323',
      'form': '#f2f2f2',
      'background': '#ececec',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      jost: ['Jost', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
