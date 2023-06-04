/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    fontfamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#D11919',
        dimWhite: 'rgba(255,255,255, 0.8)',
      },
    },
  },
  plugins: [],
};
