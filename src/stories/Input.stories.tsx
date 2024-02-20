import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Input from '../components/Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Input
      {...args}
      name="default"
      label="Label"
      placeholder="Please enter text"
    />
  ),
}

export const ErrorInput: Story = {
  render: (args) => <Input {...args} placeholder="Please enter text" />,
}

ErrorInput.args = {
  label: 'Error Label',
  error: 'cannot be empty',
}
