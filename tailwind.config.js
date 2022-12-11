/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        portfolioTheme: {
          primary: '#03C6C7',
          secondary: '#242B2E',
          accent: '#fbfbfb',
        }
      }
    ]
  },
  theme: {
    fontFamily: {
      sans: ['Comfortaa', "cursive"]
    },
    extend: {},

  },
  plugins: [require('daisyui')],
}