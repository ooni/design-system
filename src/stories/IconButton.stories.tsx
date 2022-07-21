import React from 'react'
import { addDecorator, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { FaAmazon, FaAndroid, FaApple } from 'react-icons/fa'
import IconButton from '../components/IconButton'
import Container from '../components/Container'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'IconButton',
  component: IconButton,
}

addDecorator(ThemeDecorator)

export default meta

export const Default = () => {
  return (
    <Container>
      <IconButton
        icon={<FaAndroid size={30} />}
        onClick={action('android clicked')}
      />
      <IconButton
        icon={<FaApple size={30} onClick={action('apple clicked')} />}
      />
      <IconButton
        icon={<FaAmazon size={30} onClick={action('amazon clicked')} />}
      />
    </Container>
  )
}
