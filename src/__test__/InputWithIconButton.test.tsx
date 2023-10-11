import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaAndroid } from 'react-icons/fa'
import renderWithWrapper from './index'
import { InputWithIconButton } from '..'

describe('InputWithIconButton', () => {
  test('renders InputWithIconButton', () => {
    renderWithWrapper({ component: <InputWithIconButton /> })

    const element = screen.getByRole('textbox')
    expect(element).toBeInTheDocument()
  })

  test('renders InputWithIconButton with icon element', () => {
    renderWithWrapper({
      component: (
        <InputWithIconButton icon={<FaAndroid data-testid="test-icon" />} />
      ),
    })

    const element = screen.getByTestId('test-icon')
    expect(element).toBeInTheDocument()
  })

  test('should be able to type in Input', async () => {
    renderWithWrapper({ component: <InputWithIconButton /> })

    const inputElement: HTMLInputElement = screen.getByRole('textbox')
    await userEvent.type(inputElement, 'testing input')
    expect(inputElement.value).toBe('testing input')
  })

  test('onAction is called on click', () => {
    const onAction = jest.fn()
    renderWithWrapper({
      component: (
        <InputWithIconButton
          onAction={onAction}
          icon={<FaAndroid data-testid="test-icon" />}
        />
      ),
    })

    const inputWithButton = screen.getByRole('button')
    fireEvent.click(inputWithButton)
    expect(onAction).toHaveBeenCalled()
  })
})
