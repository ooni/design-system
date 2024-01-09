import colors from './colors'

const { palette } = colors

const theme = {
  fonts: {
    body: 'Fira Sans, sans-serif',
    monospace: 'Source Code Pro, monospace',
  },
  fontSize: '40px',
  maxWidth: 1024,
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ['32em', '48em', '64em', '80em'],
  fontSizes: [12, 16, 22, 28, 36, 48],
  fontWeights: {
    light: 200,
    lightHeading: 300,
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.25,
    heading: 1.5,
  },
  radius: 2,
  colors: { ...palette },
  shadows: {
    card: '0 2px 8px rgba(0, 0, 0, .38)',
    activeCard: '0 2px 8px rgba(0, 0, 0, 0.5)',
  },
  text: {
    heading: {
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: '0px',
      fontSize: [0],
      my: 2,
    },
    headingLight: {
      variant: 'text.heading',
      letterSpacing: '-1px',
      fontWeight: 'lightHeading',
    },
    h0: {
      variant: 'text.heading',
      color: 'red',
      '::after': {
        content: 'No heading number',
      },
    },
    h1: {
      variant: 'text.headingLight',
      fontSize: 5,
    },
    h2: {
      variant: 'text.headingLight',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    error: {
      color: 'red7',
      fontSize: 12,
    },
    heroLead: {},
  },
  variants: {
    container: {
      px: 3,
      mx: 'auto',
      maxWidth: [768, 1024, 1280],
    },
    link: {
      cursor: 'pointer',
      color: 'blue6',
      textDecoration: 'none',
      '&:hover': {
        color: 'blue9',
      },
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
      '&:active': {
        boxShadow: 'activeCard',
        marginTop: 1,
        marginBottom: 0,
      },
    },
    hero: {
      variant: 'variants.container',
      fontSize: 3,
      width: '100%',
      bg: 'base',
      color: 'white',
      textAlign: 'center',
    },
  },
  buttons: {
    base: {
      fontFamily: 'inherit',
      display: 'inline-block',
      textTransform: 'capitalize',
      textAlign: 'center',
      letterSpacing: '0.5px',
      verticalAlign: 'middle',
      // Gets rid of tap active state
      '-webkit-tap-highlight-color': 'transparent',
      transition: '.2s ease-out',
      outline: 0,
      borderRadius: '60px',
      borderWidth: '2px',
      borderStyle: 'solid',
      '&:focus': {
        transition: 'none',
        outline: '2px solid',
        outlineColor: 'primary',
        outlineOffset: '1px',
      }
    },
    default: {
      color: 'white',
      bg: 'primary',
      borderColor: 'primary',
      '&:hover:enabled': {
        bg: 'blue9',
        borderColor: 'blue9',
      },
    },
    dark: {
      bg: 'gray7',
      borderColor: 'gray7',
      color: 'white',
      '&:hover:enabled': {
        bg: 'black',
        borderColor: 'black',
      },
    },
    'dark-hollow': {
      borderColor: 'gray7',
      color: 'gray7',
      '&:hover:enabled': {
        color: 'black',
        borderColor: 'black',
      },
    },
    link: {
      variant: 'variants.link',
      bg: 'none',
      border: 'none',
    },
    unstyled: {},
    inverted: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'white',
      borderColor: 'white',
      '&:hover:enabled': {
        bg: 'gray1',
        borderColor: 'gray1',
      },
    },
    hollow: {
      bg: 'transparent',
      // borderWidth: '2px',
      // borderStyle: 'solid',
    },
    'default-hollow': {
      borderColor: 'primary',
      color: 'primary',
      '&:hover:enabled': {
        color: 'blue9',
        borderColor: 'blue9',
      },
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      borderColor: 'background',
      bg: 'secondary',
    },
    disabled: {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'not-allowed',
    },
    iconButton: {
      variant: 'buttons.hollow',
      border: 'none',
      borderRadius: 'none',
      color: 'black',
      '&:hover': {
        color: 'gray6',
      },
      '&:active': {
        color: 'gray8',
      },
    },
    share: {
      variant: 'buttons.primary',
      textTransform: 'none',
      ':hover': {
        filter: 'brightness(90%)',
      },
      ':active': {
        filter: 'brightness(85%)',
        transition: '0.2s ease-in',
      },
    },
    twitterShare: {
      variant: 'buttons.share',
      bg: 'twitterBlue',
    },
    facebookShare: {
      variant: 'buttons.share',
      bg: 'facebookBlue',
    },
    small: {
      fontSize: 14,
      lineHeight: "20px",
      // height: 32,
      px: 3,
      py: "4px",
      '.icon': {
        fontSize: 20,
      },
    },
    medium: {
      fontSize: 1,
      lineHeight: "22px",
      // height: 40,
      px: 24,
      py: 7,
      '.icon': {
        fontSize: 22,
      },
    },
    large: {
      fontSize: 2,
      lineHeight: "26px",
      // height: 48,
      px: 4,
      py: 9,
      '.icon': {
        fontSize: 26,
      },
    },
    xLarge: {
      fontSize: 2,
      lineHeight: "26px",
      // height: 60,
      px: 5,
      py: 15,
      '.icon': {
        fontSize: 26,
      },
    },
  },
  forms: {
    input: {
      fontFamily: 'inherit',
      display: 'block',
      verticalAlign: 'middle',
      bg: 'transparent',
      boxSizing: 'border-box',
      borderRadius: 32,
      borderStyle: 'solid',
      borderWidth: '1px',
      outline: 'none',
      margin: 0,
      width: '100%',
      py: 2,
      px: 3,
      boxShadow: 'none',
      transition: 'all .3s',
      borderColor: 'gray6',
      '&:hover': {
        borderColor: 'gray8',
      },
      '&:focus': {
        borderColor: 'blue5',
      },
    },
    errorInput: {
      variant: 'forms.input',
      borderColor: 'red7',
      '&:hover': {
        borderColor: 'red7',
      },
      '&:focus': {
        borderColor: 'red7',
      },
    },
    textarea: {
      variant: 'forms.input',
      height: 'unset',
      borderRadius: 4,
      pl: 2,
    },
    errorTextarea: {
      variant: 'forms.errorInput',
      height: 'unset',
      borderRadius: 4,
      pl: 2,
    },
    select: {
      appearance: 'none',
      outline: 'none',
      cursor: 'pointer',
      borderRadius: 32,
      borderStyle: 'solid',
      borderWidth: '1px',
      boxSizing: 'border-box',
      margin: 0,
      width: '100%',
      py: 2,
      pl: 3,
      pr: 28,
      'html[dir="rtl"] &, body[dir="rtl"] &': {
        pl: 28,
        pr: 3,
      },
      boxShadow: 'none',
      transition: 'all .3s',
      borderColor: 'gray6',
    },
  },
}

export default theme
