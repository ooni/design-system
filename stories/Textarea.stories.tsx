import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Textarea from '../src/components/Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  // argTypes: {
  // },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Textarea {...args} label="Label" placeholder="Please enter text" />
  ),
}

export const ErrorInput: Story = {
  render: (args) => <Textarea {...args} placeholder="Please enter text" />,
}

ErrorInput.args = {
  error: 'cannot be empty',
}
