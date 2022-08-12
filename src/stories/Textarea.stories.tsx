import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import Textarea, { ITextarea } from '../components/Textarea'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'Textarea',
  component: Textarea,
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<ITextarea> = (args) => (
  <Textarea {...args} placeholder="Please enter text" />
)

export const Default = Template.bind({})

export const ErrorTextarea = Template.bind({})

Default.args = {}

ErrorTextarea.args = {
  error: 'cannot be empty',
}
