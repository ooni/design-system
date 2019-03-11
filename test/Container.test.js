/* global describe, test, expect */
import React from 'react'
import { renderJSON } from './index'
import { Container } from '../components'

describe('Container', () => {
  test('renders', () => {
    const wrapper = renderJSON(
      <Container />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('render with maxWidth prop', () => {
    const wrapper = renderJSON(
      <Container maxWidth={500} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
