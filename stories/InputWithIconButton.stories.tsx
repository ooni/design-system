import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import Container from '../src/components/Container'
import InputWithIconButton from '../src/components/InputWithIconButton'

const meta: Meta = {
  title: 'Components/InputWithIconButton',
  component: InputWithIconButton,
} satisfies Meta<typeof InputWithIconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Container>
      <InputWithIconButton
        {...args}
        icon={<MdDelete size={30} />}
        placeholder="https://twitter.com/"
        onAction={action('icon clicked')}
      />
    </Container>
  ),
}

export const ErrorInput: Story = {
  args: {
    error: 'cannot be empty',
  },
}
