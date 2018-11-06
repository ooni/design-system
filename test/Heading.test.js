/* global describe, test, expect */
import React from 'react'
import { renderJSON, mountWithTheme } from './index'
import { Heading } from '../components'

describe('Heading', () => {
  test('renders', () => {
    const wrapper = renderJSON(
      <Heading> Hello OONI! </Heading>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('renders with default props', () => {
    const wrapper = mountWithTheme(
      <Heading />
    )
    expect(wrapper).toHaveStyleRule('margin-top', '8px')
    expect(wrapper).toHaveStyleRule('margin-bottom', '8px')
  })

  test('renders with h prop', () => {
    const wrapper = mountWithTheme(
      <Heading h={2}> Hello OONI! </Heading>
    )
    //TODO Test if the underlying element is <h2>
    expect(wrapper.find('h2')).toHaveLength(1)
    expect(wrapper).toHaveStyleRule('font-size', '36px')
    expect(wrapper).toHaveStyleRule('font-weight', '300')
    expect(wrapper).toHaveStyleRule('letter-spacing', '-1px')
  })
})
