import {
  style,
  px
} from 'styled-system'

const {
  defaultFontSizes
} = require('./constants')

export const fontSizeMult = (propName, k) => {
  console.error('usage of fontSizeMult will be deprecated')

  return style({
    prop: 'fontSize',
    cssProperty: propName,
    key: 'fontSizes',
    transformValue: n => px(n * k),
    scale: defaultFontSizes
  })
}

export default fontSizeMult
