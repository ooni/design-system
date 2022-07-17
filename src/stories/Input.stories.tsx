import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import Input, { IInput } from '../components/Input'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'Input',
  component: Input,
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<IInput> = (args) => (
  <Input {...args} placeholder="Please enter text" />
)

export const Default = Template.bind({})

export const Textarea = Template.bind({})

Default.args = {}

Textarea.args = {
  type: 'textarea',
}
