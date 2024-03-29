/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx,html,css}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(bg-blur.png)',
        blurMobile: 'url(bg-blur-mobile.png)',
        coding: 'url(bg-react-coding.png)',
        react: 'url(react-logo.png)'
      },
      fontFamily: 'Roboto, sans-serif',
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43'
        },
        blue: {
          500: '#81D8F7'
        },
        orange: {
          500: '#FBA94C'
        },
        red: {
          500: '#F75A68'
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
      keyframes: {
        rotation: {
          to: { transform: 'rotate(180deg)' }
        }
      },
      animation: {
        rotation: 'rotation .3s linear forwards'
      }
    }
  },
  plugins: []
};
