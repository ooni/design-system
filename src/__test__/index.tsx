import React, { JSXElementConstructor, ReactElement } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/rebassTheme'

interface IRenderWithWrapper {
  component: ReactElement<any, string | JSXElementConstructor<any>>
  options?: any
}

interface IWrapper {
  children: ReactElement<any>
}

function renderWithWrapper({ component, options }: IRenderWithWrapper) {
  const Wrapper = ({ children }: IWrapper) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )

  return render(component, { wrapper: Wrapper, ...options })
}

export default renderWithWrapper
