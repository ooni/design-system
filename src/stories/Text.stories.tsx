import type { Meta, StoryObj } from '@storybook/react'
import Text from '../components/Text'

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    fontSize: { control: 'number' },
    fontWeight: { control: 'string' },
    color: { control: 'string' },
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fontSize: 5,
    fontWeight: 'bold',
    color: 'primary',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu sapien urna. Donec aliquet dictum porta. Sed accumsan dui eu faucibus eleifend. Nunc commodo nibh turpis, quis aliquam erat iaculis et. Cras et interdum eros, sed euismod dolor. In ac nulla mollis, scelerisque ante et, faucibus urna. Etiam sit amet neque aliquet, molestie orci ac, porta sem. Curabitur iaculis porta massa, sed bibendum lectus suscipit sed. Nullam nisi eros, cursus non mi vitae, facilisis tempus dui.',
  },
}
