import React from 'react'
import { screen } from '@testing-library/react'
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
    expect(buttonElement).toHaveStyle('color: #0588cb')
    expect(buttonElement).toHaveStyle('background-color: #f8f9fa')
  })

  test('renders Button with hollow prop', () => {
    renderWithWrapper({ component: <Button hollow /> })

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveStyle('color: #0588cb')
    expect(buttonElement).toHaveStyle('background-color: transparent')
  })

  test('renders Button with hollow and border prop', () => {
    renderWithWrapper({ component: <Button hollow border={4} /> })

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveStyle('border-width: 4px')
    expect(buttonElement).toHaveStyle('border-style: solid')
    expect(buttonElement).toHaveStyle('border-color: #0588cb')
  })

  test('renders Button with rebass props', () => {
    renderWithWrapper({ component: <Button width={1} m={2} fontSize={2} /> })

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveStyle('width: 100%')
    expect(buttonElement).toHaveStyle('margin: 8px')
    expect(buttonElement).toHaveStyle('font-size: 22px')
  })
})
