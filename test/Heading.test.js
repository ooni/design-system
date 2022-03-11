/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { Heading } from '../'

describe('Heading', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Heading> Hello OONI! </Heading>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with default props', () => {
    const { container } = renderWithTheme(
      <Heading />
    )
    expect(container.firstChild).toHaveStyleRule('margin-top', '8px')
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '8px')
  })

  test('renders with h prop', () => {
    const { container } = renderWithTheme(
      <Heading h={2}> Hello OONI! </Heading>
    )
    expect(container.querySelector('h2')).not.toBeNull()
    expect(container.firstChild).toHaveStyleRule('font-size', '36px')
    expect(container.firstChild).toHaveStyleRule('font-weight', '300')
    expect(container.firstChild).toHaveStyleRule('letter-spacing', '-1px')
  })
})
