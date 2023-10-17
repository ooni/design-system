import React, { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Box from '../src/components/Box'
import Flex from '../src/components/Flex'
import Modal from '../src/components/Modal'
import Container from '../src/components/Container'
import Button from '../src/components/Button'

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
