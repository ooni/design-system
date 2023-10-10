import React from 'react'
import { screen } from '@testing-library/react'
import 'jest-styled-components'
import renderWithWrapper from './index'
import { Text } from '..'

describe('Text', () => {
  test('renders Text', () => {
    renderWithWrapper({ component: <Text data-testid="test-text" /> })

    const textElement = screen.getByTestId('test-text')
    expect(textElement).toBeInTheDocument()
  })

  test('renders Text with props', () => {
    renderWithWrapper({
      component: (
        <Text
          data-testid="test-text"
          fontSize={18}
          fontWeight={500}
          textAlign="center"
        />
      ),
    })

    const textElement = screen.getByTestId('test-text')
    expect(textElement).toHaveStyleRule('font-size', '18px')
    expect(textElement).toHaveStyleRule('font-weight', '500')
    expect(textElement).toHaveStyleRule('text-align', 'center')
  })
})
