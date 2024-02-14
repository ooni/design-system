import { render } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

interface IRenderWithWrapper {
  component: ReactElement
  options?: object
}

interface IWrapper {
  children: React.ReactNode
}

function renderWithWrapper({ component, options }: IRenderWithWrapper) {
  const Wrapper = ({ children }: IWrapper) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )

  return render(component, { wrapper: Wrapper, ...options })
}

export default renderWithWrapper
