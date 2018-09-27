/* global describe, test, expect, jest */
import React from 'react'
import { renderJSON, shallowWithTheme } from './index'
import { Card } from '../components'

describe('Card', () => {
  test('renders', () => {
    const json = renderJSON(
      <Card />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with children', () => {
    const json = renderJSON(
      <Card>
        <div />
      </Card>
    )
    expect(json).toMatchSnapshot()
  })

  test('is clickable', () => {
    const onClick = jest.fn()
    const wrapper = shallowWithTheme(
      <Card onClick={onClick} />
    )
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
})
