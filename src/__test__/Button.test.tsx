import { screen } from '@testing-library/react'
import 'jest-styled-components'
import React from 'react'
import { Button } from '..'
import renderWithWrapper from './index'

describe('Button', () => {
  test('renders Button', () => {
    renderWithWrapper({ component: <Button /> })

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  test('renders Button with inverted prop', () => {
    renderWithWrapper({ component: <Button inverted /> })

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveStyleRule('color', '#0588cb')
    expect(buttonElement).toHaveStyleRule('background-color', '#f8f9fa')
  })

  test('renders Button with hollow prop', () => {
    renderWithWrapper({ component: <Button hollow /> })

    const buttonElement = screen.getByRole('button')
    // expect(buttonElement).toHaveStyleRule('color', '#0588cb')
    expect(buttonElement).toHaveStyleRule('background-color', 'transparent')
  })
})
