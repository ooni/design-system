import 'jest-styled-components'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import {
  theme
} from '../components'

export const renderWithTheme = (el, customTheme) => {
  const ProviderWrapper = ({ children }) => (
    <ThemeProvider theme={customTheme || theme}>
      {children}
    </ThemeProvider>
  )
  return render(el, {
    wrapper: ProviderWrapper
  })
}
