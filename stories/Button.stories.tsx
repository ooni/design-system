import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import Box from '../src/components/Box'
import Button from '../src/components/Button'

const meta = {
  title: 'Components/Button',
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

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
}

export const LoadingButton: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
    spinner: <>spinner</>,
    disabled: true,
  },
}

export const ColorVariant: Story = {
  args: {
    color: 'dark',
    children: 'Button',
    size: 'small',
    endIcon: <BsTwitter />,
  },
}

export const Inverted: Story = {
  args: {
    inverted: true,
    children: 'Button',
  },
}

export const Hollow: Story = {
  args: {
    hollow: true,
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
