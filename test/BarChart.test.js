/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { BarChart } from '../components'

describe('BarChart', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <BarChart />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
