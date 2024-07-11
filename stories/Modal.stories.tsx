import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React, { useCallback, useState } from 'react'
// import Button from '../src/components/Button'
import Modal from '../src/components/Modal'

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
    <>
      <div className="flex items-center">
        <button className='btn btn-primary' onClick={() => setShow(true)}>Show Modal</button>
      </div>
      <Modal show={show} onHideClick={onClose}>
        <div className="p-4">Modal Content</div>
      </Modal>
    </>
  )
}
