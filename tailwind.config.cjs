const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,astro,js,jsx}'],
  theme: {
    container: {
      center: true,

      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      colors: {
        base: {
          main: '#fdfcfc',
          shade: '#F5F4F4',
        }, // background
        foreground: '#030202', // text

        primary: '#eeff00',
        secondary: {
          main: '#7fff08',
          shade: '#E4FDCB',
        },
        accent: {
          main: '#d81b18',
          shade: '#E37270',
        },
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      fontFamily: {
        aleo: ['Aleo', ...defaultTheme.fontFamily.sans],
        quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-hamburgers')],
};
