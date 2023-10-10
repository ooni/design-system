import React from 'react'
import { screen } from '@testing-library/react'
import 'jest-styled-components'
import renderWithWrapper from './index'
import { Heading } from '..'

describe('Heading', () => {
  test('renders Heading', () => {
    renderWithWrapper({ component: <Heading /> })

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
  })

  test('render Heading with default h prop', () => {
    renderWithWrapper({ component: <Heading /> })

    const headingElement = screen.getByRole('heading', { level: 1 })
    expect(headingElement).toBeInTheDocument()
  })

  test('renders Heading with correct h prop', () => {
    renderWithWrapper({ component: <Heading h={3} /> })

    const headingElement = screen.getByRole('heading', { level: 3 })
    expect(headingElement).toBeInTheDocument()
  })

  test('render Heading with text', () => {
    renderWithWrapper({ component: <Heading>OONI Run!</Heading> })

    const headingElement = screen.getByText(/OONI Run!/i)
    expect(headingElement).toBeVisible()
  })

  test('render Heading with variant styles', () => {
    renderWithWrapper({ component: <Heading h={2}>OONI Run!</Heading> })

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveStyleRule('font-size', '36px')
    expect(headingElement).toHaveStyleRule('font-weight', '300')
    expect(headingElement).toHaveStyleRule('letter-spacing', '-1px')
  })

  test('render Heading with rebass style props', () => {
    renderWithWrapper({
      component: (
        <Heading h={2} color="red">
          OONI Run!
        </Heading>
      ),
    })

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveStyleRule('color', 'red')
  })
})
