/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { PieChart } from '../components'

describe('PieChart', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <PieChart />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
