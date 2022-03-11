/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import { TwitterShareButton, FacebookShareButton } from '../'

describe('TwitterShareButton', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <TwitterShareButton />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('FacebookShareButton', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <FacebookShareButton />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
