/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { Select } from '../'

describe('Select', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Select />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with children', () => {
    const { container } = renderWithTheme(
      <Select>
        <option value="1">One</option>
        <option value="2">Two</option>
      </Select>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
