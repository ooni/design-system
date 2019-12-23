/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { CategoryCodePOLR, NettestGroupWebsites } from '../components/icons'

describe('Icons', () => {
  test('renders Category Code Icon', () => {
    const { container } = renderWithTheme(
      <CategoryCodePOLR />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders icon for Test Group', () => {
    const { container } = renderWithTheme(
      <NettestGroupWebsites />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
