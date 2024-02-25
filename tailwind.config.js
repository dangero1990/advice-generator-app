/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/index.js'],
  theme: {
    extend: {
      maxWidth: {
        80: '80%',
      },
    },
  },
  plugins: [],
};
