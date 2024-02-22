import { render } from '@testing-library/react'
import React, { ReactElement } from 'react'

interface IRenderWithWrapper {
  component: ReactElement
  options?: object
}

interface IWrapper {
  children: React.ReactNode
}

function renderWithWrapper({ component, options }: IRenderWithWrapper) {
  const Wrapper = ({ children }: IWrapper) => <>{children}</>

  return render(component, { wrapper: Wrapper, ...options })
}

export default renderWithWrapper
