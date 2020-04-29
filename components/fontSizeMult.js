/* global require */
import {
  system
} from 'styled-system'

const {
  defaultFontSizes
} = require('./constants')

export const fontSizeMult = (propName, k) => {
  /* eslint-disable no-console */
  console.error('usage of fontSizeMult will be deprecated')
  /* eslint-enable no-console */

  return system({
    'fontSize': {
      property: propName,
      scale: 'fontSizes',
      transform: n => n * k,
      defaultScale: defaultFontSizes
    }
  })
}

export default fontSizeMult
