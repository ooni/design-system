import { Meta } from '@storybook/react-vite'
import React from 'react'
import LogoOONIRun from '../src/components/LogoOONIRun'

const meta: Meta = {
  title: 'LogoOONIRun',
  component: LogoOONIRun,
}

export default meta

export const Default = () => {
  return (
    <div className="bg-black">
      <LogoOONIRun height="70px" />
    </div>
  )
}
