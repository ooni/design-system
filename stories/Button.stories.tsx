import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import Button from '../src/components/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    hollow: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
  },
}

export const DisabledButton: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
}

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Button',
    size: 's',
  },
}

export const DarkHollow: Story = {
  args: {
    variant: 'dark',
    hollow: true,
    children: 'Button',
    size: 'l',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Button',
    endIcon: <BsTwitter />,
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
    <div className="w-[300px]">
      <Button>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Button>
    </div>
  )
}
