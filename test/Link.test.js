/* global describe, test, expect */
import React from 'react'
import { renderJSON, mountWithTheme } from './index'
import { Link } from '../components'

describe('Link', () => {
  test('renders', () => {
    const json = renderJSON(
      <Link href='https://ooni.org'>OONI</Link>
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with prop color', () => {
    const linkColor = 'green8' // from theme
    const json = renderJSON(
      <Link color={linkColor}>OONI Green</Link>
    )
    expect(json).toMatchSnapshot()
  })

  test('renders a <a> tag with href', () => {
    const wrapper = mountWithTheme(
      <Link href='https://ooni.org'>OONI</Link>
    )
    expect(wrapper.find('a')).toHaveLength(1)
    expect(wrapper.text()).toEqual('OONI')
    expect(wrapper.getDOMNode()).toHaveProperty('href')
    expect(wrapper.prop('href')).toEqual('https://ooni.org')
  })
})
