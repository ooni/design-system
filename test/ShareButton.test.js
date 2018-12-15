/* global describe, test, expect */
import React from 'react'
import { renderJSON } from './index'
import { TwitterShareButton, FacebookShareButton } from '../components'

describe('TwitterShareButton', () => {
  test('renders', () => {
    const json = renderJSON(
      <TwitterShareButton />
    )
    expect(json).toMatchSnapshot()
  })
})

describe('FacebookShareButton', () => {
  test('renders', () => {
    const json = renderJSON(
      <FacebookShareButton />
    )
    expect(json).toMatchSnapshot()
  })
})
