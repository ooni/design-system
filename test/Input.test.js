/* global describe, test, expect, jest */
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

  test('renders with prop type', () => {
    const json = renderShallowJSON(
      <Input type='number' />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with prop rows', () => {
    const json = renderShallowJSON(
      <Input type='textarea' rows={4} />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with prop fontSize', () => {
    const json = renderShallowJSON(
      <Input fontSize={4} />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with onChange handler', () => {
    // const value = 'OONI'
    // const onChange = jest.fn()
    const wrapper = renderShallowJSON(
      <Input onChange={jest.fn()} />
    )
    expect(wrapper).toMatchSnapshot()
    // XXX: Should we simulate an event
    // wrapper.find('input').simulate('change', {
    //   target: { value }
    // })
    // expect(onChange).toBeCalledWith(value)
  })
})
