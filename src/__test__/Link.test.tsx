import React from 'react'
import { screen } from '@testing-library/react'
import renderWithWrapper from './index'
import { Link } from '..'

describe('Link', () => {
  test('renders Link', () => {
    renderWithWrapper({
      component: <Link href="https://ooni.org" data-testid="link-test" />,
    })

    const linkElement = screen.getByTestId('link-test')
    expect(linkElement).toBeInTheDocument()
  })

  test('renders Link with color and content', () => {
    renderWithWrapper({
      component: (
        <Link href="https://ooni.org" data-testid="link-test" color="red">
          OONI Explorer
        </Link>
      ),
    })

    const linkElement = screen.getByTestId('link-test')
    expect(linkElement).toHaveStyle('color: red')
    expect(linkElement).toHaveTextContent(/OONI Explorer/i)
  })

  test('renders Link with href', () => {
    renderWithWrapper({
      component: (
        <Link data-testid="link-test" href="https://ooni.org">
          OONI
        </Link>
      ),
    })

    const linkElement = screen.getByTestId('link-test')
    expect(linkElement).toHaveAttribute('href', 'https://ooni.org')
  })
})
