/* global describe, test, expect, jest */
import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from './index'
import { Card } from '../components'

describe('Card', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Card />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with children', () => {
    const { container } = renderWithTheme(
      <Card>
        <div />
      </Card>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('is clickable', () => {
    const onClick = jest.fn()
    const { getByText } = renderWithTheme(
      <Card onClick={onClick}>
        Content
      </Card>
    )
    fireEvent.click(getByText('Content'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
