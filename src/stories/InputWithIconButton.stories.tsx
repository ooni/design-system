import React from 'react'
import { addDecorator, Meta } from '@storybook/react'
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

export const Default = () => {
  return (
    <Container>
      <InputWithIconButton
        icon={<MdDelete />}
        placeholder="https://twitter.com/"
        error="Error input"
        onAction={action('icon clicked')}
      />
    </Container>
  )
}
