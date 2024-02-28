import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import Box from '../src/components/Box'
import ButtonTW from '../src/components/ButtonTW'

const meta = {
  title: 'Components/ButtonTW',
  component: ButtonTW,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    hollow: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof ButtonTW>

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
    <Box width="300px">
      <ButtonTW>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ButtonTW>
    </Box>
  )
}
