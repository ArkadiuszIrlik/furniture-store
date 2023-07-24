/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindForms from '@tailwindcss/forms';
import tailwindScrollbar from 'tailwind-scrollbar';
// const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindScrollbarNoComp = tailwindScrollbar({ nocompatible: true });

module.exports = {
  // module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '36rem',
      sm: '48rem',
      md: '64rem',
      lg: '85.375rem',
      xl: '120rem',
      '2xl': '160rem',
    },
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
      colors: {
        primary: {
          300: '#E5E2D8',
          400: '#d0ccc1',
          700: '#999381',
          800: '#6B6257',
        },
        accents: {
          300: '#D8DAE6',
          700: '#717799',
        },
        warning: '#BF4242',
        text: '#212427',
        product: '#F4F4F4',
      },
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
