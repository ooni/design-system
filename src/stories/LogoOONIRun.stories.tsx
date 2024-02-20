import { Meta } from '@storybook/react'
import React from 'react'
import Container from '../components/Container'
import LogoOONIRun from '../components/LogoOONIRun'

const meta: Meta = {
  title: 'LogoOONIRun',
  component: LogoOONIRun,
}

export default meta

export const Default = () => {
  return (
    <Container bg="blue4">
      <LogoOONIRun height="70px" />
    </Container>
  )
}
