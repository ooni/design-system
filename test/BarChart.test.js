/* global describe, test, expect */
import React from 'react'
import { renderShallowJSON } from './index'
import { BarChart } from '../components'

describe('BarChart', () => {
  test('renders', () => {
    const json = renderShallowJSON(
      <BarChart />
    )
    expect(json).toMatchSnapshot()
  })
})
