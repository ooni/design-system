import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
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

export const Example = () => {
  return (
    <div className="w-[200px]">
      <Checkbox
        name="checkbox1"
        label="Checkbox1 checkbox1 checkbox1 checkbox1 checkbox1"
      />
      <Checkbox
        name="checkbox2"
        label="Checkbox2 checkbox2 checkbox2 checkbox2 checkbox2"
      />
      <Checkbox
        name="checkbox3"
        label="Checkbox3 checkbox3 checkbox3 checkbox3 checkbox3"
      />
    </div>
  )
}
