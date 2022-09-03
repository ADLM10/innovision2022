const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        dark: '#181818',
        light: '#e6e6e6',
        background: '#0D0D0D',
        text: '#F2F2F2',
        accent: '#0B74BF',
        gray: '#737373',
        debug: '#9D174D',
      },
    },
    fontFamily: {
      primary: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'min-xl': ['2.5rem'],
      'min-lg': ['1.5rem'],
      'min-base': ['1rem'],
      'min-sm': ['0.75rem'],
      'min-xs': ['0.625rem'],
      'min-us': ['0.5rem'],

      'max-xl': ['4.625rem'],
      'max-lg': ['2.25rem'],
      'max-base': ['1.5rem'],
      'max-sm': ['1rem'],
      'max-xs': ['0.75rem'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
    textUnderlineOffset: {
      0:  '0px',
      1: '0.75rem'
    }
  },
  plugins: [require('flowbite/plugin')],
}
