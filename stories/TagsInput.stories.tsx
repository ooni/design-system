import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TagsInput from '../src/components/TagsInput'

const meta = {
  title: 'Components/TagsInput',
  component: TagsInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TagsInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <TagsInput {...args} name="default" label="Tags" placeholder="Add tags" />
  ),
}

export const ErrorInput: Story = {
  render: (args) => <TagsInput {...args} placeholder="Add tags" />,
}

ErrorInput.args = {
  label: 'Error Label',
  error: 'cannot be empty',
}
