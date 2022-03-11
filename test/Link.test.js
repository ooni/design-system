/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { Link } from '../'

describe('Link', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Link href='https://ooni.org'>OONI</Link>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with prop color', () => {
    const linkColor = 'green8' // from theme
    const { container } = renderWithTheme(
      <Link color={linkColor}>OONI Green</Link>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders the <a> tag with href', () => {
    const content = 'OONI'
    const url = 'https://ooni.org'
    const { container } = renderWithTheme(
      <Link href={url}>{content}</Link>
    )
    const renderedElement = container.querySelector('a')
    expect(renderedElement).not.toBeNull()
    expect(renderedElement.textContent).toBe(content)
    expect(renderedElement.attributes['href'].value).toBe(url)
  })
})
