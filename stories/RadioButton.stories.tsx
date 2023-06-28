import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import RadioButton from '../src/components/RadioButton'

const meta: Meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
} satisfies Meta<typeof RadioButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'OONI',
    name: 'OONI',
    id: 'ooni',
    value: 'ooni',
  },
}
