import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import Box from '../src/components/Box'
import Button from '../src/components/ButtonVE'

const meta = {
  title: 'Components/ButtonVE',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    hollow: { control: 'boolean' },
    disabled: { control: 'boolean' },
    inverted: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
  },
}

export const ColorVariant: Story = {
  args: {
    variant: 'dark',
    children: 'Button',
    size: 's',
    endIcon: <BsTwitter />,
  },
}

export const Hollow: Story = {
  args: {
    hollow: true,
    size: 'l',
    children: 'Button',
  },
}

export const LongButton = () => {
  return (
    <Box width="300px">
      <Button>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Button>
    </Box>
  )
}
