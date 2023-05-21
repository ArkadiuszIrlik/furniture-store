/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '48rem',
      md: '64rem',
      lg: '85.375rem',
      xl: '120rem',
      '2xl': '160rem',
    },
    extend: {
      fontFamily: {
        'dm-sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
        'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          300: '#E5E2D8',
          700: '#999381',
          800: '#6B6257',
        },
        accents: {
          300: '#D8DAE6',
          700: '#717799',
        },
        text: '#212427',
        product: '#F4F4F4'
      },
    },
  },
  plugins: [],
};
