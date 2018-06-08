import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import rebassTheme from '../components/theme/rebassTheme'
import victoryTheme from '../components/theme/victoryTheme'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator((story) => (
  <ThemeProvider theme={rebassTheme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module)
