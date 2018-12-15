/* global describe, test, expect */
import React from 'react'
import { renderJSON } from './index'
import { RadioButton, RadioGroup } from '../components'

describe('RadioButton', () => {
  test('renders', () => {
    const json = renderJSON(
      <RadioButton />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with prop checked', () => {
    const json = renderJSON(
      <RadioButton checked />
    )
    expect(json).toMatchSnapshot()
  })
})


describe('RadioGroup', () => {
  test('renders', () => {
    const json = renderJSON(
      <RadioGroup>
        <RadioButton />
      </RadioGroup>
    )
    expect(json).toMatchSnapshot()
  })
})
