/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { Hero } from '../components'

describe('Hero', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Hero />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with children', () => {
    const { container } = renderWithTheme(
      <Hero>
        <div />
      </Hero>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
