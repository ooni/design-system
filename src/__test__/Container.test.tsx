import React from 'react'
import { screen } from '@testing-library/react'
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
    expect(containerElement).toHaveStyle('padding-left: 16px')
    expect(containerElement).toHaveStyle('padding-right: 16px')
    expect(containerElement).toHaveStyle('margin-left: auto')
    expect(containerElement).toHaveStyle('margin-left: auto')
    expect(containerElement).toHaveStyle('max-width: 768px')
  })

  test('render Container with rebass props', () => {
    renderWithWrapper({
      component: <Container data-testid="test-div" maxWidth={500} />,
    })

    const containerElement = screen.getByTestId('test-div')
    expect(containerElement).toHaveStyle('max-width: 500px')
  })
})
