import colors from './colors'

export const rebassTheme = {
  fonts: {
    sans: '"Fira Sans", sans-serif',
    mono: '"Source Code Pro", monospace',
  },
  maxWidth: 1024,
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
  ],
  breakpoints: [
    '32em',
    '48em',
    '64em',
    '80em'
  ],
  fontSizes: [
    12,
    16,
    22,
    28,
    36,
    48
  ],
  weights: [400, 600],
  radius: 2,
  colors: Object.assign({}, colors.palette),
  variants: {
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      borderRadius: '20px',
      ':hover': {
        'color': 'primary',
        'bg': 'white'
      },
      ':disabled': {
        'opacity': '0.5'
      }
    },
    inverted: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'white',
      ':hover': {
        'color': 'white',
        'bg': 'primary'
      }
    },
    hollow: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'primary',
      ':hover': {
        'color': 'white',
        'bg': 'primary'
      }
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  }
}

export default rebassTheme
