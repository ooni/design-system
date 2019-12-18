/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { RadioButton, RadioGroup } from '../components'

describe('RadioButton', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <RadioButton />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with prop checked', () => {
    const { container } = renderWithTheme(
      <RadioButton checked />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})


describe('RadioGroup', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <RadioGroup>
        <RadioButton />
      </RadioGroup>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
