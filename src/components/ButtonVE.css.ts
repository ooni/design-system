import { createGlobalTheme } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from './ButtonVESprinkles.css'

export const vars = createGlobalTheme(':root', {
  color: {
    blue: {
      '100': '#c9e8ff',
      '200': '#8dd5f8',
      '300': '#5db8fe',
      '400': '#37a6ed',
      '500': '#0588cb',
      '600': '#0f77b8',
      '700': '#056aa6',
      '800': '#005f9c',
      '900': '#005a99',
    },
  },
  fontSize: {
    sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
  },
  space: {
    sm: '0.5rem',
  },
})

export const button = recipe({
  base: {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: 999,
    cursor: 'pointer',
    fontFamily: 'inherit',
    // display: 'inline-block',
    textTransform: 'capitalize',
    // textAlign: 'center',
    letterSpacing: '0.5px',
    // verticalAlign: 'middle',
    // Gets rid of tap active state
    WebkitTapHighlightColor: 'transparent',
    transition: '.2s ease-out',
    outline: 0,
    borderWidth: '2px',
    borderStyle: 'solid',
    ':focus-visible': {
      transition: 'none',
      outline: '2px solid',
      outlineColor: vars.color.blue[500],
      outlineOffset: '1px',
    },
  },
  variants: {
    variant: {
      primary: {
        background: vars.color.blue[500],
        color: 'white',
        borderColor: vars.color.blue[500],
        ':hover': {
          background: vars.color.blue[900],
          borderColor: vars.color.blue[900],
        },
      },
      dark: {
        background: 'black',
        borderColor: 'black',
        color: 'white',
        ':hover': {
          background: 'black',
          borderColor: 'black',
        },
      },
    },
    size: {
      s: [{ padding: '0.25rem 1rem' }, sprinkles({ textStyle: 'sm' })],
      m: [{ padding: '0.5rem 1.5rem' }, sprinkles({ textStyle: 'md' })],
      l: [{ padding: '0.5rem 2rem' }, sprinkles({ textStyle: 'xxl' })],
      xl: [{ padding: '0.875rem 4rem' }, sprinkles({ textStyle: 'xxl' })],
    },
    hollow: {
      true: { background: 'transparent' },
    },
  },
  defaultVariants: {
    size: 'm',
    hollow: false,
    variant: 'primary',
  },
  compoundVariants: [
    {
      variants: {
        variant: 'primary',
        hollow: true,
      },
      style: {
        background: 'transparent',
        color: vars.color.blue[500],
        ':hover': {
          background: 'transparent',
          borderColor: vars.color.blue[900],
          color: vars.color.blue[900],
        },
      },
    },
  ],
})

// export const storybookButton = style({
//   fontFamily: 'Nunito Sans , Helvetica Neue , Helvetica , Arial , sans-serif',
//   fontWeight: '700',
//   border: '0',
//   borderRadius: '3em',
//   cursor: 'pointer',
//   display: 'inline-block',
//   lineHeight: '1',
// });

// export const storybookButtonLarge = style({
//   fontSize: '16px',
//   padding: '12px 24px',
// });

// export const storybookButtonMedium = style({
//   fontSize: '14px',
//   padding: '11px 20px',
// });

// export const storybookButtonPrimary = style({
//   color: 'white',
//   backgroundColor: '#1ea7fd',
// });

// export const storybookButtonSecondary = style({
//   color: '#333',
//   backgroundColor: 'transparent',
//   boxShadow: 'rgba(0,0,0,0.15) 0px 0px 0px 1px inset',
// });

// export const storybookButtonSmall = style({
//   fontSize: '12px',
//   padding: '10px 16px',
// });
