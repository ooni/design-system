import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import Button, { IButton } from '../components/Button'
import ThemeDecorator from './ThemeDecorator'
import colors from '../theme/colors'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<IButton> = (args) => <Button {...args}>Click me</Button>

export const Default = Template.bind({})

export const Inverted = Template.bind({})

export const Hollow = Template.bind({})

export const Disabled = Template.bind({})

export const ButtonAllProps = Template.bind({})

Inverted.args = {
  inverted: true,
}

Hollow.args = {
  hollow: true,
  border: 6,
}

Disabled.args = {
  disabled: true,
}

ButtonAllProps.args = {
  bg: colors.palette.blue6,
  color: colors.palette.yellow4,
  fontWeight: 'bold',
  height: 60,
  mx: 10,
  my: 10,
  px: 2,
  py: 2,
  width: 250,
}
