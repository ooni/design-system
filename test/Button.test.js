/* global describe, test, expect */
import React from 'react'
import { renderJSON, renderShallowJSON } from './index'
import { Button } from '../components'

describe('Button', () => {
  test('renders', () => {
    const json = renderJSON(
      <Button />
    )
    expect(json).toMatchSnapshot()
  })
  test('render with width prop', () => {
    const json = renderShallowJSON(
      <Button width={1} />
    )
    expect(json).toMatchSnapshot()
    // XXX for some reason only a shallow render makes this assertion true
    expect(json).toHaveStyleRule('width', '100%')
  })
})
