/* global describe, test, expect */
import React from 'react'
import { renderJSON } from './index'
import { Text } from '../components'

describe('Text', () => {
  test('renders', () => {
    const json = renderJSON(
      <Text />
    )
    expect(json).toMatchSnapshot()
  })
})
