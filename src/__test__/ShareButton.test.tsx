import React from 'react'
import { screen } from '@testing-library/react'
import renderWithWrapper from './index'
import { TwitterShareButton, FacebookShareButton } from '..'

describe('Share Buttons', () => {
  test('renders Twitter share button', () => {
    renderWithWrapper({
      component: <TwitterShareButton data-testid="test-twitter-btn" />,
    })

    const element = screen.getByTestId('test-twitter-btn')
    expect(element).toBeInTheDocument()
  })

  test('renders Facebook share button', () => {
    renderWithWrapper({
      component: <FacebookShareButton data-testid="test-facebook-btn" />,
    })

    const element = screen.getByTestId('test-facebook-btn')
    expect(element).toBeInTheDocument()
  })
})
