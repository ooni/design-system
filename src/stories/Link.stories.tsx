import type { Meta, StoryObj } from '@storybook/react'
import Link from '../components/Link'

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Link Preview',
    href: 'https://ooni.org',
    target: '_blank',
  },
}
