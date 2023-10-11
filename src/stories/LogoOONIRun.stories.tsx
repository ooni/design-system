import React from 'react'
import { addDecorator, Meta } from '@storybook/react'
import LogoOONIRun from '../components/LogoOONIRun'
import Container from '../components/Container'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'LogoOONIRun',
  component: LogoOONIRun,
}

addDecorator(ThemeDecorator)

export default meta

export const Default = () => {
  return (
    <Container bg="blue4">
      <LogoOONIRun />
    </Container>
  )
}
