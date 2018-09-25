/* global describe, test, expect */
import React from 'react'
import { renderJSON, renderShallowJSON } from './index'
import { Input } from '../components'

describe('Input', () => {
  test('renders', () => {
    const json = renderJSON(
      <Input error='Some error' />
    )
    expect(json).toMatchSnapshot()
  })
})
