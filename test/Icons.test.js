/* global describe, test, expect */
import React from 'react'
import { renderWithTheme } from './index'
import * as icons from '../components/icons'

describe('Icons', () => {
  test('renders all icons', () => {
    const { container } = renderWithTheme(
      <div>
        {Object.keys(icons).map((k, i) => {
          const Icon = icons[k]
          return (
            <div key={i} width={1/5} pb={3}>
              <Icon size={50} />
            </div>
          )
        })}
      </div>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
