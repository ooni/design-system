import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithWrapper from './index'
import { Textarea } from '..'

describe('Textarea', () => {
  test('renders Textarea', () => {
    renderWithWrapper({ component: <Textarea /> })

    const textareaElement = screen.getByRole('textbox')
    expect(textareaElement).toBeInTheDocument()
  })

  test('renders Textarea with rows props', () => {
    renderWithWrapper({
      component: <Textarea rows={4} data-testid="test-textarea" />,
    })

    const textareaElement = screen.getByTestId('test-textarea')
    expect(textareaElement).toHaveAttribute('rows', '4')
  })

  test('should be able to type in Textarea', async () => {
    renderWithWrapper({ component: <Textarea /> })

    const textareaElement: HTMLTextAreaElement = screen.getByRole('textbox')
    await userEvent.type(textareaElement, 'testing textarea')
    expect(textareaElement.value).toBe('testing textarea')
  })

  test('render with onChange handler', () => {
    const value = 'OONI'
    const onChange = jest.fn()
    renderWithWrapper({ component: <Textarea onChange={onChange} /> })

    const textareaElement: HTMLTextAreaElement = screen.getByRole('textbox')

    fireEvent.change(textareaElement, {
      target: { value },
    })
    expect(textareaElement.value).toBe(value)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
