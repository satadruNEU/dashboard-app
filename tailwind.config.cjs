/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        'accent-pink': '#FF2E63',
        'accent-purple': '#8A2BE2',
        'accent-green': '#00FF9D',
        'button-bg': '#191919',
        'button-border': '#323232',
        'button-hover': '#323232',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
      width: {
        '70': '17.5rem',
      },
      margin: {
        '70': '17.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
} 