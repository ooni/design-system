import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Input from '../src/components/Input'

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
  label: 'Error Input',
  error: 'cannot be empty',
}

export const DisabledInput: Story = {
  render: (args) => <Input {...args} label="Disabled Input" disabled placeholder="Please enter text" />,
}
