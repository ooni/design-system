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
  fontWeights: {
    light: 200,
    body: 400,
    bold: 700
  },
  radius: 2,
  colors: Object.assign({}, colors.palette),
  text: {
    error: {
      color: 'red7',
    }
  },
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
  },
  forms: {
    input: {
      fontFamily: 'inherit',
      display: 'block',
      verticalAlign: 'middle',
      bg: 'transparent',
      border: 'none',
      borderRadius: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      outline: 'none',
      margin: 0,
      padding: 0,
      width: '100%',
      py: 2,
      boxShadow: 'none',
      'box-sizing': 'content-box',
      transition: 'all .3s',
      borderBottomColor: 'gray1',
      ':hover': {
        borderBottomColor: 'gray1'
      },
      ':focus': {
        borderBottomColor: 'base'
      },
    },
    error: {
      variant: 'forms.input',
      borderBottomColor: 'red7',
      ':hover': {
        borderBottomColor: 'red7'
      },
      ':focus': {
        borderBottomColor: 'red7'
      },
    },
    textarea: {
      variant: 'forms.input',
      height: 'unset',
    }
  }
}

export default rebassTheme
