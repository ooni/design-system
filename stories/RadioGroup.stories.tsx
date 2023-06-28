import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RadioGroup from '../src/components/RadioGroup'
import RadioButton from '../src/components/RadioButton'

const meta: Meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup onChange={action('radio option changed')} name="radioGroupName">
      <RadioButton name="name1" label="OONI" value="one" id="one" />
      <RadioButton name="name2" label="Ooni" value="two" id="two" />
      <RadioButton name="name3" label="ooni" value="three" id="three" />
      <RadioButton name="name4" label="O.O.N.I" value="four" id="four" />
    </RadioGroup>
  ),
}
