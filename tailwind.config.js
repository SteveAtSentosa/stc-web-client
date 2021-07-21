const { customColors, screenBreaks } = require('./src/styles/styleConfigs')

module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: `${screenBreaks.sm}px`,
      md: `${screenBreaks.md}px`,
      lg: `${screenBreaks.lg}px`,
      xl: `${screenBreaks.xl}px`,
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '2/3': '66%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      colors: customColors
    },
  },
  variants: {},
  plugins: [],
}
