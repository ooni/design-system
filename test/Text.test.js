/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { Text } from '../components'

describe('Text', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Text />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with prop fontWeight', () => {
    const { container } = renderWithTheme(
      <Text fontWeight={500} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with prop fontSize', () => {
    const { container } = renderWithTheme(
      <Text fontSize={18} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with prop textAlign', () => {
    const { container } = renderWithTheme(
      <Text textAlign={'center'} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with prop width', () => {
    const { container } = renderWithTheme(
      <Text width={1} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
