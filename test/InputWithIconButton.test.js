/* global describe, test, expect, jest */
import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from './index'
import { InputWithIconButton } from '../'

describe('InputWithIconButton', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <InputWithIconButton icon={<div />} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('render with onAction prop', () => {
    const { container } = renderWithTheme(
      <InputWithIconButton onAction={() => {}} icon={<div />} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('onAction is called on click', () => {
    const onAction = jest.fn()
    const { container, getByRole } = renderWithTheme(
      <InputWithIconButton onAction={onAction} data-testid='test-input' />
    )
    expect(container.firstChild).toMatchSnapshot()

    const inputWithButton = getByRole('button')
    fireEvent.click(inputWithButton)
    expect(onAction).toHaveBeenCalled()
  })
})
