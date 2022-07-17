import React from 'react'
import { screen } from '@testing-library/react'
import renderWithWrapper from './index'
import { Select } from '..'

describe('Select', () => {
  test('renders Select', () => {
    renderWithWrapper({ component: <Select data-testid="test-select" /> })

    const selectElement = screen.getByTestId('test-select')
    expect(selectElement).toBeInTheDocument()
  })

  test('renders with option', () => {
    renderWithWrapper({
      component: (
        <Select data-testid="test-select">
          <option value="1" data-testid="test-option">
            One
          </option>
          <option value="2">Two</option>
        </Select>
      ),
    })

    const optionElement = screen.getByTestId('test-option')
    expect(optionElement).toHaveAttribute('value', '1')
  })
})
