/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pitch': {
          50: '#e6f7e6',
          100: '#c2eac2',
          200: '#9ddc9d',
          300: '#77cf77',
          400: '#51c151',
          500: '#39a239',
          600: '#2E7D32', // Primary green
          700: '#205823',
          800: '#133214',
          900: '#071705',
        },
        'team-home': {
          500: '#3B82F6', // Blue for home team
        },
        'team-away': {
          500: '#EF4444', // Red for away team
        },
        'accent': {
          500: '#F59E0B', // Amber for accents
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};