import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import FacebookShareButton, {
  IFacebookShareButton,
} from '../components/FacebookShareButton'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'FacebookShareButton',
  component: FacebookShareButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<IFacebookShareButton> = (args) => (
  <FacebookShareButton {...args} />
)

export const Default = Template.bind({})

Default.args = {
  url: 'https://www.facebook.com/ooni.org/posts/pfbid0bLKGz5jJ3APvHjT4w4Lnwh4nv1mXTd5TDqoASrebfVgPtySJsS1tKKWVingpcZR6l',
}
