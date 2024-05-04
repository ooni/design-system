/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const primaryColor = '#0588cb'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        blue: {
          100: '#e7f5ff',
          200: '#c9e8ff',
          300: '#8dd5f8',
          400: '#5db8fe',
          500: '#37a6ed',
          600: '#0588cb',
          700: '#0f77b8',
          800: '#056aa6',
          900: '#005f9c',
          1000: '#005a99',
        },
      },
    },
  },

  // plugins: [
  // 	require('@tailwindcss/typography'),
  // 	require('@tailwindcss/aspect-ratio'),
  // 	require('@tailwindcss/forms'),
  // ],
}
