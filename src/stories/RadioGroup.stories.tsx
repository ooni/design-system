import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RadioGroup, { IRadioGroup } from '../components/RadioGroup'
import RadioButton from '../components/RadioButton'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'RadioGroup',
  component: RadioGroup,
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<IRadioGroup> = (args) => {
  return (
    <RadioGroup {...args}>
      <RadioButton name="name" label="OONI" value="one" id="one" />
      <RadioButton name="name" label="Ooni" value="two" id="two" />
      <RadioButton name="name" label="ooni" value="three" id="three" />
      <RadioButton name="name" label="O.O.N.I" value="four" id="four" />
    </RadioGroup>
  )
}

export const Default = Template.bind({})

Default.args = {
  onChange: action('radio option changed'),
  name: 'name',
}
