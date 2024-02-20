import { Meta, StoryObj } from '@storybook/react'
import FacebookShareButton from '../components/FacebookShareButton'

const meta = {
  title: 'Components/FacebookShareButton',
  component: FacebookShareButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof FacebookShareButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: 'https://www.facebook.com/ooni.org/posts/pfbid0bLKGz5jJ3APvHjT4w4Lnwh4nv1mXTd5TDqoASrebfVgPtySJsS1tKKWVingpcZR6l',
  },
}
