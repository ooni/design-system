import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import TwitterShareButton, {
  ITwitterShareButton,
} from '../components/TwitterShareButton'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'TwitterShareButton',
  component: TwitterShareButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<ITwitterShareButton> = (args) => (
  <TwitterShareButton {...args} />
)

export const Default = Template.bind({})

Default.args = {
  url: 'https://twitter.com/OpenObservatory/status/1537764247442268161',
  message: 'Run OONI Probe to test for censorship!',
  hashtags: 'test,test2',
}
