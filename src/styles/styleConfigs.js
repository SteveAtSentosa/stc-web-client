const screenBreaks = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const customColors = {

  // theme
  'primary-dark': '#252f3f',  // tw gray-800
  'primary': '#5850ec',       // tw indigo-600
  'primary-muted': '#7986CB', // custom
  'primary-light': '#e5edff', // tw indigo-100

  // custom colors
  amber: {
    '50': '#fff8e1',
    '100': '#ffecb3',
    '200': '#ffe082',
    '300': '#ffd54f',
    '400': '#ffca28',
    '500': '#ffc107',
    '600': '#ffb300',
    '700': '#ffa000',
    '800': '#ff8f00',
    '900': '#ff6f00',
    'a100': '#ffe57f',
    'a200': '#ffd740',
    'a400': '#ffc400',
    'a700': '#ffab00',
  },
  'indigo-muted': {
    '600': '#7986CB'
  }
}


module.exports = {
  screenBreaks,
  customColors
}


