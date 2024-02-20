import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Box from '../components/Box'

const meta = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    children: 'Box',
    css: `background: ${(props: any) => props.theme.colors.yellow3};`,
    // css: { background: (props) => props.theme.colors.blue5 },
    sx: { color: 'blue5' },
  },
}

export const Default: Story = {
  render: () => (
    <Box p={2} bg="blue2" sx={{ color: 'blue5' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
      mattis finibus. Aliquam convallis gravida ipsum. Integer mattis ligula et
      interdum ullamcorper. Nunc scelerisque ultrices iaculis. Donec egestas
      mauris vitae enim tempor aliquam. Etiam et est nec nibh molestie
      hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
      sem sapien, tempor nec sapien quis, laoreet consequat sem.
    </Box>
  ),
}
