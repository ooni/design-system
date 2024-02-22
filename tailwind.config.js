/** @type {import('tailwindcss').Config} */
import theme from './src/theme'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './stories/**/*.{js,ts,jsx,tsx}'],
  theme,
}
