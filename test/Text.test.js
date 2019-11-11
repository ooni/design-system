/* global describe, test, expect */
import React from 'react'
import { renderJSON, renderShallowJSON } from './index'
import { Text } from '../components'

describe('Text', () => {
  test('renders', () => {
    const json = renderJSON(
      <Text />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with prop fontWeight', () => {
    const json = renderShallowJSON(
      <Text fontWeight={500} />
    )

    expect(json).toMatchSnapshot()
  })

  test('renders with prop fontSize', () => {
    const json = renderShallowJSON(
      <Text fontSize={18} />
    )

    expect(json).toMatchSnapshot()
  })

  test('renders with prop textAlign', () => {
    const json = renderShallowJSON(
      <Text textAlign={'center'} />
    )

    expect(json).toMatchSnapshot()
  })

  test('renders with prop width', () => {
    const json = renderShallowJSON(
      <Text width={1} />
    )

    expect(json).toMatchSnapshot()
  })
})
