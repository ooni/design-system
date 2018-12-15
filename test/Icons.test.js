/* global describe, test, expect */
import React from 'react'
import { renderJSON } from './index'
import { CategoryCodePOLR, NettestGroupWebsites } from '../components/icons'

describe('Icons', () => {
  test('renders Category Code Icon', () => {
    const json = renderJSON(
      <CategoryCodePOLR />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders icon for Test Group', () => {
    const json = renderJSON(
      <NettestGroupWebsites />
    )
    expect(json).toMatchSnapshot()
  })
})
