/* global require */
import {
  style,
  px
} from 'styled-system'

const {
  defaultFontSizes
} = require('./constants')

export const fontSizeMult = (propName, k) => {
  /* eslint-disable no-console */
  console.error('usage of fontSizeMult will be deprecated')
  /* eslint-enable no-console */

  return style({
    prop: 'fontSize',
    cssProperty: propName,
    key: 'fontSizes',
    transformValue: n => px(n * k),
    scale: defaultFontSizes
  })
}

export default fontSizeMult
