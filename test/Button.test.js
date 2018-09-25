/* global describe, test, expect */
import React from 'react'
import toJson from 'enzyme-to-json'
import { renderJSON, shallowWithTheme } from './index'
import { Button } from '../components'

describe('Button', () => {
  test('renders', () => {
    const wrapper = renderJSON(
      <Button />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('render with width prop', () => {
    const wrapper = shallowWithTheme(
      <Button width={1} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
    // XXX for some reason only a shallow render makes this assertion true
    expect(wrapper).toHaveStyleRule('width', '100%')
  })

  test('render with margin prop', () => {
    const wrapper = shallowWithTheme(
      <Button m={2} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('margin', '8px')
  })

  test('render with fontSize prop', () => {
    const wrapper = shallowWithTheme(
      <Button fontSize={2} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('font-size', '22px')
  })

  test('render with inverted prop', () => {
    const wrapper = shallowWithTheme(
      <Button inverted />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('color', '#0588cb')
    expect(wrapper).toHaveStyleRule('background-color', '#f8f9fa')
  })

  test('render with hollow prop', () => {
    const wrapper = shallowWithTheme(
      <Button hollow />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
    //  expect(wrapper).toHaveStyleRule('background-color', 'transparent')
  })

  test('render with border prop (and hollow)', () => {
    const wrapper = shallowWithTheme(
      <Button hollow border={4} />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('border', '4px solid #0588cb')
  })

})
