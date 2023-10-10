import React from 'react'
import { screen } from '@testing-library/react'
import 'jest-styled-components'
import renderWithWrapper from './index'
import { Container } from '..'

describe('Container', () => {
  test('renders Container', () => {
    renderWithWrapper({ component: <Container data-testid="test-div" /> })

    const containerElement = screen.getByTestId('test-div')
    expect(containerElement).toBeInTheDocument()
  })

  test('render Container with variant styles', () => {
    renderWithWrapper({ component: <Container data-testid="test-div" /> })

    const containerElement = screen.getByTestId('test-div')
    expect(containerElement).toHaveStyleRule('padding-left', '16px')
    expect(containerElement).toHaveStyleRule('padding-right', '16px')
    expect(containerElement).toHaveStyleRule('margin-left', 'auto')
    expect(containerElement).toHaveStyleRule('margin-left', 'auto')
    expect(containerElement).toHaveStyleRule('max-width', '768px')
  })

  test('render Container with rebass props', () => {
    renderWithWrapper({
      component: <Container data-testid="test-div" maxWidth={500} />,
    })

    const containerElement = screen.getByTestId('test-div')
    expect(containerElement).toHaveStyleRule('max-width', '500px')
  })
})
