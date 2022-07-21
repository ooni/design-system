import React, { useCallback, useState } from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Box, Button, Flex } from 'rebass/styled-components'
import Modal from '../components/Modal'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'Modal',
  component: Modal,
}

addDecorator(ThemeDecorator)

export default meta

export const Default = () => {
  return (
    <Modal show closeButton="right" onHideClick={() => {}}>
      <Container>
        <Heading h={1}>Modal Content</Heading>
      </Container>
    </Modal>
  )
}

export const CompleteExample = () => {
  const [show, setShow] = useState(true)

  const onClose = useCallback(() => {
    setShow(false)
    action('Clicked')
  }, [])

  return (
    <Container>
      <Flex alignItems="center">
        <Box mx={5}>
          {' '}
          Page content Page content Page content Page content Page content Page
          content Page content Page content{' '}
        </Box>
        {!show && <Button onClick={() => setShow(true)}> Show Modal </Button>}
        <Box mx={5}>
          {' '}
          Page content Page content Page content Page content Page content Page
          content Page content Page content{' '}
        </Box>
      </Flex>
      <Modal show={show} closeButton="right" onHideClick={onClose}>
        <Box p={3}>Modal Content</Box>
      </Modal>
    </Container>
  )
}
