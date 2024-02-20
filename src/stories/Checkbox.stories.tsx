import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Box from '../components/Box'
import Checkbox from '../components/Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  // argTypes: {
  // },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'default',
    label: 'Label',
  },
}

export const Example = () => {
  return (
    <Box width="200px">
      <Checkbox mb={2} name="checkbox1" label="Checkbox1 checkbox1 checkbox1 checkbox1 checkbox1" />
      <Checkbox mb={4} name="checkbox2" label="Checkbox2 checkbox2 checkbox2 checkbox2 checkbox2" />
      <Checkbox name="checkbox3" label="Checkbox3 checkbox3 checkbox3 checkbox3 checkbox3" reverse />
    </Box>
  )
}
