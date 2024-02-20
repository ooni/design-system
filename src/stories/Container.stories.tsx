import { Meta, StoryObj } from '@storybook/react'
import Container from '../components/Container'

const meta = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    bg: { control: 'string' },
    p: { control: 'number' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof Container>
export const Default: Story = {
  args: {
    bg: 'blue3',
    width: 400,
    height: 400,
    p: 4,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu sapien urna. Donec aliquet dictum porta. Sed accumsan dui eu faucibus eleifend. Nunc commodo nibh turpis, quis aliquam erat iaculis et. Cras et interdum eros, sed euismod dolor. In ac nulla mollis, scelerisque ante et, faucibus urna. Etiam sit amet neque aliquet, molestie orci ac, porta sem. Curabitur iaculis porta massa, sed bibendum lectus suscipit sed. Nullam nisi eros, cursus non mi vitae, facilisis tempus dui.',
  },
}
