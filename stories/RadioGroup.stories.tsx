import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import RadioButton from '../src/components/RadioButton'
import RadioGroup from '../src/components/RadioGroup'

const meta: Meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup onChange={action('radio option changed')} name="radioGroupName">
      <RadioButton name="radioGroupName" label="OONI" value="one" id="one" />
      <RadioButton name="radioGroupName" label="Ooni" value="two" id="two" />
      <RadioButton
        name="radioGroupName"
        label="ooni"
        value="three"
        id="three"
      />
      <RadioButton
        name="radioGroupName"
        label="O.O.N.I"
        value="four"
        id="four"
      />
    </RadioGroup>
  ),
}
