import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import { TextProps } from 'rebass'
import Text from '../components/Text'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'Text',
  component: Text,
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<TextProps> = (args) => <Text {...args}>Test Text</Text>

export const Default = Template.bind({})

Default.args = {
  fontSize: 5,
  fontWeight: 'bold',
  color: 'primary',
}
