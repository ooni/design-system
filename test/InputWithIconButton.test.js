/* global describe, test, expect */
import React from 'react'
import { renderJSON, renderShallowJSON } from './index'
import { InputWithIconButton } from '../components'

describe('InputWithIconButton', () => {
  test('renders', () => {
    const json = renderJSON(
      <InputWithIconButton icon={<div />} />
    )
    expect(json.type).toMatchSnapshot()
  })
  test('render with onAction prop', () => {
    const json = renderJSON(
      <InputWithIconButton onAction={() => {}} icon={<div />} />
    )
    expect(json.type).toMatchSnapshot()
  })
})
