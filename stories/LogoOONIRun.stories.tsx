import React from 'react'
import { Meta } from '@storybook/react'
import LogoOONIRun from '../src/components/LogoOONIRun'
import Container from '../src/components/Container'

const meta: Meta = {
  title: 'LogoOONIRun',
  component: LogoOONIRun,
}

export default meta

export const Default = () => {
  return (
    <Container bg="blue4">
      <LogoOONIRun />
    </Container>
  )
}
