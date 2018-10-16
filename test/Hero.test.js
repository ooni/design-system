/* global describe, test, expect */
import React from 'react'
import { renderJSON } from './index'
import { Hero } from '../components'

describe('Hero', () => {
  test('renders', () => {
    const json = renderJSON(
      <Hero />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with children', () => {
    const json = renderJSON(
      <Hero>
        <div />
      </Hero>
    )
    expect(json).toMatchSnapshot()
  })
})
