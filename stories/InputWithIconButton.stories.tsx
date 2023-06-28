import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MdDelete } from 'react-icons/md'
import InputWithIconButton from '../src/components/InputWithIconButton'
import Container from '../src/components/Container'

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
