import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MdDelete } from 'react-icons/md'
import InputWithIconButton from '../components/InputWithIconButton'
import Container from '../components/Container'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'InputWithIconButton',
  component: InputWithIconButton,
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story = (args) => {
  return (
    <Container>
      <InputWithIconButton
        {...args}
        icon={<MdDelete />}
        placeholder="https://twitter.com/"
        onAction={action('icon clicked')}
      />
    </Container>
  )
}

export const Default = Template.bind({})

export const ErrorInput = Template.bind({})

ErrorInput.args = {
  error: 'cannot be empty',
}
