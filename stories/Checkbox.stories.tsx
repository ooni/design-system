import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Checkbox from '../src/components/Checkbox'

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
