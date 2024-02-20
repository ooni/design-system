import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React, { useCallback, useState } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Modal from '../components/Modal'

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Default = () => {
  const [show, setShow] = useState(false)

  const onClose = useCallback(() => {
    setShow(false)
    action('Clicked')
  }, [])

  return (
    <Container>
      <Flex alignItems="center">
        <Button onClick={() => setShow(true)}> Show Modal </Button>
      </Flex>
      <Modal show={show} onHideClick={onClose}>
        <Box p={3}>Modal Content</Box>
      </Modal>
    </Container>
  )
}
