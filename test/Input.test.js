/* global describe, test, expect, jest */
import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from './index'
import { Input } from '../'

describe('Input', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Input error='Some error' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with prop type', () => {
    const { container } = renderWithTheme(
      <Input type='number' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with prop rows', () => {
    const { container } = renderWithTheme(
      <Input type='textarea' rows={4} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with prop fontSize', () => {
    const { container } = renderWithTheme(
      <Input fontSize={4} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with onChange handler', () => {
    const value = 'OONI'
    const onChange = jest.fn()
    const { container, getByTestId } = renderWithTheme(
      <Input onChange={onChange} data-testid='test-input'/>
    )

    expect(container.firstChild).toMatchSnapshot()

    const input = getByTestId('test-input')
    fireEvent.change(input, {
      target: { value }
    })
    expect(input.value).toBe(value)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
