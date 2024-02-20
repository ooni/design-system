import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { FaAndroid } from 'react-icons/fa'
import IconButton from '../src/components/IconButton'

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <FaAndroid size={30} />,
  },
}
