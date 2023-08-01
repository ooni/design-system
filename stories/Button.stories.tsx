import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
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
