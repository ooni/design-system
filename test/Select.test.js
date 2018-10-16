/* global describe, test, expect */
import React from 'react'
import { renderJSON } from './index'
import { Select } from '../components'

describe('Select', () => {
  test('renders', () => {
    const json = renderJSON(
      <Select />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with children', () => {
    const json = renderJSON(
      <Select>
        <option value="1">One</option>
        <option value="2">Two</option>
      </Select>
    )
    expect(json).toMatchSnapshot()
  })
})
