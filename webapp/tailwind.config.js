module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.jsx'],
  theme: {
    extend: {
      fontSize: {
        base: '16px',
      },
      fontFamily: {
        sans: ['Work Sans', 'Open Sans', 'Roboto', 'Oxygen', 'sans-serif'],
      },
      spacing: {
        '9/16': '56.25%',
        '10/16': '62.50%',
      },
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['disabled'],
    backgroundColor: ['hover', 'disabled'],
    textColor: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}
