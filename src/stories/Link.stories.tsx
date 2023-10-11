import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import { Link, LinkProps } from 'rebass/styled-components'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'Link',
  component: Link,
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<LinkProps> = (args) => <Link {...args}>Test Link</Link>

export const Default = Template.bind({})

export const CustomColor = Template.bind({})

export const Attributes = Template.bind({})

Default.args = {
  href: 'https://ooni.org',
}

CustomColor.args = {
  href: 'https://ooni.org',
  color: 'red',
}

Attributes.args = {
  href: 'https://ooni.org',
  color: 'green',
  target: '_blank',
}
