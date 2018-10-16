/* global describe, test, expect */
import React from 'react'
import { renderShallowJSON } from './index'
import { PieChart } from '../components'

describe('PieChart', () => {
  test('renders', () => {
    const json = renderShallowJSON(
      <PieChart />
    )
    expect(json).toMatchSnapshot()
  })
})
