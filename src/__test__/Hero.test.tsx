import React from 'react'
import { screen } from '@testing-library/react'
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
    expect(heroElement).toHaveStyle('width: 100%')
    expect(heroElement).toHaveStyle('text-align: center')
    expect(heroElement).toHaveStyle('color: rgb(248, 249, 250)')
    expect(heroElement).toHaveStyle('font-size: 28px')
  })
})
