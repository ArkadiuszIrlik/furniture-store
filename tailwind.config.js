/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindForms = require('@tailwindcss/forms');
const tailwindScrollbar = require('tailwind-scrollbar');
const tailwindScrollbarNoComp = tailwindScrollbar({ nocompatible: true });
const styleVars = require('./src/styleVars.js');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: styleVars.screens,
    extend: {
      backgroundImage: (theme) => ({
        'review-score': `linear-gradient(90deg, ${theme(
          'colors.accents[700]'
        )} var(--scorePercentage),
        ${theme('colors.accents[300]')} var(--scorePercentage))`,
      }),
      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)', ...defaultTheme.fontFamily.sans],
        'open-sans': ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
      },
      // colors: {
      //   primary: {
      //     300: '#E5E2D8',
      //     400: '#d0ccc1',
      //     700: '#999381',
      //     800: '#6B6257',
      //   },
      //   accents: {
      //     300: '#D8DAE6',
      //     700: '#717799',
      //   },
      //   warning: '#BF4242',
      //   text: styleVars.textColor,
      //   product: '#F4F4F4',
      // },
      colors: styleVars.colors,
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-up-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(30%)' },
          // '30%': {opacity: '0', transform: 'translateY(30%)'},
          '90%': { opacity: '60' },
          '100%': { opacity: '100', transform: 'translateX(0)' },
        },
        'slide-down-fade-out': {
          '0%': { opacity: '100', transform: 'translateX(0)' },
          '10%': { opacity: '60' },
          '100%': { opacity: '0', transform: 'translateY(30%)' },
          // '30%': {opacity: '0', transform: 'translateY(30%)'},
        },
      },
    },
  },
  plugins: [tailwindForms, tailwindScrollbarNoComp],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
