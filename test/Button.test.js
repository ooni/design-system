/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { Button } from '../components'

describe('Button', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Button />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('render with width prop', () => {
    const { container } = renderWithTheme(
      <Button width={1} />
    )
    expect(container.firstChild).toMatchSnapshot()
    // XXX for some reason only a shallow render makes this assertion true
    expect(container.firstChild).toHaveStyleRule('width', '100%')
  })

  test('render with margin prop', () => {
    const { container } = renderWithTheme(
      <Button m={2} />
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule('margin', '8px')
  })

  test('render with fontSize prop', () => {
    const { container } = renderWithTheme(
      <Button fontSize={2} />
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule('font-size', '22px')
  })

  test('render with inverted prop', () => {
    const { container } = renderWithTheme(
      <Button inverted />
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule('color', '#0588cb')
    expect(container.firstChild).toHaveStyleRule('background-color', '#f8f9fa')
  })

  test('render with hollow prop', () => {
    const { container } = renderWithTheme(
      <Button hollow />
    )
    expect(container.firstChild).toMatchSnapshot()
    //  expect(container.firstChild).toHaveStyleRule('background-color', 'transparent')
  })

  test('render with border prop (and hollow)', () => {
    const { container } = renderWithTheme(
      <Button hollow border={4} />
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(container.firstChild).toHaveStyleRule('border', '4px solid #0588cb')
  })

})
