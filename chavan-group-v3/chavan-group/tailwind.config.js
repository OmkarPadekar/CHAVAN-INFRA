/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'],
        display: ['Archivo', 'sans-serif'],
      },
      colors: {
        crimson: {
          50: '#fdf2f2',
          100: '#fbe3e3',
          200: '#f5c2c2',
          400: '#d64545',
          500: '#c81e1e',
          600: '#a91515',
          700: '#8a1010',
          900: '#450a0a',
          950: '#2b0606',
        },
        ink: {
          900: '#1a1414',
          700: '#3a2f2f',
          500: '#6b5a5a',
          300: '#a8999a',
        },
      },
    },
  },
  plugins: [],
}
