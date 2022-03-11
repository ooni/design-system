/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { Container } from '../'

describe('Container', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Container />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('render with maxWidth prop', () => {
    const { container } = renderWithTheme(
      <Container maxWidth={500} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
