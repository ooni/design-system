/* global describe, test, expect */
import 'jest-styled-components'
import React from 'react'
import TestRenderer from 'react-test-renderer'

import {
  Input,
  Button,
  InputWithIconButton
} from '../components'

const renderJSON = el => TestRenderer.create(el).toJSON()

describe('Button', () => {
  test('renders', () => {
    const json = renderJSON(
      <Button />
    )
    expect(json.type).toBe('button')
  })
  test('render with width prop', () => {
    const json = renderJSON(
      <Button width={1} />
    )
    expect(json).toHaveStyleRule('width', '100%')
  })
})

describe('Input', () => {
  test('renders', () => {
    const json = renderJSON(
      <Input error='Error message' />
    )
    expect(json.type).toBe('div')
  })
})

describe('InputWithIconButton', () => {
  test('renders', () => {
    const json = renderJSON(
      <InputWithIconButton icon={<div />} />
    )
    expect(json.type).toBe('div')
  })
  test('render with onAction prop', () => {
    const json = renderJSON(
      <InputWithIconButton onAction={() => {}} icon={<div />} />
    )
    expect(json.type).toBe('div')
  })
})
