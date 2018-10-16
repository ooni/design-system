/* global describe, test, expect, jest */
import React from 'react'
import { renderJSON, shallowWithTheme } from './index'
import { InputWithIconButton } from '../components'

describe('InputWithIconButton', () => {
  test('renders', () => {
    const json = renderJSON(
      <InputWithIconButton icon={<div />} />
    )
    expect(json).toMatchSnapshot()
  })

  test('render with onAction prop', () => {
    const json = renderJSON(
      <InputWithIconButton onAction={() => {}} icon={<div />} />
    )
    expect(json).toMatchSnapshot()
  })

  test('onAction is called on click', () => {
    const onAction = jest.fn()
    const wrapper = shallowWithTheme(
      <InputWithIconButton onAction={onAction} />
    )
    wrapper.find('IconButton').simulate('click')
    expect(onAction).toHaveBeenCalled()
  })
})
