import { Meta } from '@storybook/react'
import React from 'react'
import LogoOONIRun from '../src/components/LogoOONIRun'

const meta: Meta = {
  title: 'LogoOONIRun',
  component: LogoOONIRun,
}

export default meta

export const Default = () => {
  return <LogoOONIRun height="70px" />
}
