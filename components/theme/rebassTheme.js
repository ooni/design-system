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
    lightHeading: 300,
    body: 400,
    heading: 600,
    bold: 700
  },
  lineHeights: {
    body: 1.25,
    heading: 1.5,
  },
  radius: 2,
  colors: Object.assign({}, colors.palette),
  shadows: {
    card: '0 2px 8px rgba(0, 0, 0, .38)',
    activeCard: '0 2px 8px rgba(0, 0, 0, 0.5)'
  },
  text: {
    heading: {
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: '0px',
      fontSize: [0],
      my: 2
    },
    headingLight: {
      variant: 'text.heading',
      letterSpacing: '-1px',
      fontWeight: 'lightHeading'
    },
    h0: {
      variant: 'text.heading',
      color: 'red',
      '::after': {
        content: 'No heading number'
      }
    },
    h1: {
      variant: 'text.headingLight',
      fontSize: 5
    },
    h2: {
      variant: 'text.headingLight',
      fontSize: 4
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0
    },
    error: {
      color: 'red7',
    }
  },
  variants: {
    container: {
      px: 3,
      mx:'auto',
      maxWidth: [768, 1024, 1280]
    },
    link: {
      color: 'blue7',
      textDecoration: 'none',
      ':hover': {
        filter: 'brightness(125%)'
      }
    },
    card: {
      border: 'none',
      borderRadius: '10px',
      padding: [1, 4],
      boxShadow: 'card',
    },
    clickableCard: {
      my: 1,
      variant: 'variants.card',
      ':active': {
        boxShadow: 'activeCard',
        marginTop: 1,
        marginBottom: 0
      }
    }
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
    iconButton: {
      variant: 'buttons.hollow',
      border: 'none',
      borderRadius: 'none',
      color: 'gray5',
      ':hover': {
        color: 'gray4',
      },
      ':active': {
        color: 'gray6',
      }
    }
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
    },
    select: {
      bg: 'gray2',
      border: 'none',
      borderRadius: '2em',
      appearance: 'none',
      outline: 'none',
      cursor: 'pointer',
      py: '10px',
      pr: '40px',
      pl: 3,
      width: 'unset',
    },
  }
}

export default rebassTheme
