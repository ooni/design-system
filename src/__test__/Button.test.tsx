import React from 'react'
import { screen } from '@testing-library/react'
import 'jest-styled-components'
import renderWithWrapper from './index'
import { Button } from '..'

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

  test('renders Button with rebass props', () => {
    renderWithWrapper({ component: <Button width={1} m={2} fontSize={2} /> })

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveStyleRule('width', '100%')
    expect(buttonElement).toHaveStyleRule('margin', '8px')
    expect(buttonElement).toHaveStyleRule('font-size', '22px')
  })
})
