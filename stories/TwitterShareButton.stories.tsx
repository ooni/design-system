import { Meta, StoryObj } from '@storybook/react'
import TwitterShareButton from '../src/components/TwitterShareButton'

const meta = {
  title: 'Components/TwitterShareButton',
  component: TwitterShareButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof TwitterShareButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: 'https://twitter.com/OpenObservatory/status/1537764247442268161',
    message: 'Run OONI Probe to test for censorship!',
    hashtags: 'test,test2',
  },
}
