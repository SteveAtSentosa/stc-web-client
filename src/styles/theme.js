// NOTE: most styling theming is done via tailwind custom colors
// there are cases where the actual color values are required
// (for example in the charts library), that

export const twColors = {
  primaryDark: 'gray-800',
  primary: 'indigo-600',
  primaryMuted: '#7986CB',
  primaryLight: 'indigo-100',
  secondaryDark: '',
  secondary: '',
  secondaryLight: '',
  tertiaryDark: '',
  tertiary: '',
  tertiaryLight: '',

}

// corresponds to values for above tailwind theme classes
export const colors = {

  // theme
  primaryDark: '#2d3748',
  primary: '#5a67d8',
  primaryMuted: '#7986CB',
  primaryLight: '#ebf4ff',
  secondaryDark: '',
  secondary: '',
  secondaryLight: '',
  tertiaryDark: '',
  tertiary: '',
  tertiaryLight: '',
}

const theme = {
  twColors,
  colors,
}

export default theme
