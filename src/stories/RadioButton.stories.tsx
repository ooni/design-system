import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import RadioButton, { IRadioButton } from '../components/RadioButton'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'RadioButton',
  component: RadioButton,
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<IRadioButton> = (args) => <RadioButton {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'OONI',
  name: 'OONI',
  id: 'ooni',
  value: 'ooni',
}
