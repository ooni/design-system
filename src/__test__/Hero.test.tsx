import React from 'react'
import { screen } from '@testing-library/react'
import 'jest-styled-components'
import renderWithWrapper from './index'
import { Hero, HeroLead } from '..'

describe('Hero and HeroLead', () => {
  test('renders Hero', () => {
    renderWithWrapper({ component: <Hero data-testid="test-hero" /> })

    const heroElement = screen.getByTestId('test-hero')
    expect(heroElement).toBeInTheDocument()
  })

  test('renders HeroLead', () => {
    renderWithWrapper({
      component: <HeroLead data-testid="test-hero-lead">Testing</HeroLead>,
    })

    const heroLeadElement = screen.getByTestId('test-hero-lead')
    expect(heroLeadElement).toBeInTheDocument()
    expect(heroLeadElement).toHaveTextContent(/Testing/i)
  })

  test('renders Hero with variant styles', () => {
    renderWithWrapper({ component: <Hero data-testid="test-hero" /> })

    const heroElement = screen.getByTestId('test-hero')
    expect(heroElement).toHaveStyleRule('width', '100%')
    expect(heroElement).toHaveStyleRule('text-align', 'center')
    expect(heroElement).toHaveStyleRule('color', '#f8f9fa')
    expect(heroElement).toHaveStyleRule('font-size', '28px')
  })
})
