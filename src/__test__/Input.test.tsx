import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithWrapper from './index'
import { Input } from '..'

describe('Input', () => {
  test('renders Input', () => {
    renderWithWrapper({ component: <Input /> })

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  test('renders Input with prop type', () => {
    renderWithWrapper({
      component: <Input type="number" data-testid="test-input" />,
    })

    const inputElement = screen.getByTestId('test-input')
    expect(inputElement).toHaveAttribute('type', 'number')
  })

  test('renders Textarea with default props', () => {
    renderWithWrapper({
      component: <Input type="textarea" data-testid="test-input" />,
    })

    const inputElement = screen.getByTestId('test-input')
    expect(inputElement).toHaveAttribute('rows', '3')
  })

  test('renders Textarea with rows props', () => {
    renderWithWrapper({
      component: <Input type="textarea" rows={4} data-testid="test-input" />,
    })

    const inputElement = screen.getByTestId('test-input')
    expect(inputElement).toHaveAttribute('rows', '4')
  })

  test('should be able to type in Input', async () => {
    renderWithWrapper({ component: <Input /> })

    const inputElement: HTMLInputElement = screen.getByRole('textbox')
    await userEvent.type(inputElement, 'testing input')
    expect(inputElement.value).toBe('testing input')
  })

  test('render with onChange handler', () => {
    const value = 'OONI'
    const onChange = jest.fn()
    renderWithWrapper({ component: <Input onChange={onChange} /> })

    const inputElement: HTMLInputElement = screen.getByRole('textbox')

    fireEvent.change(inputElement, {
      target: { value },
    })
    expect(inputElement.value).toBe(value)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
