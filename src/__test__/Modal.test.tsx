import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import renderWithWrapper from './index'
import { Modal } from '..'

describe('Modal', () => {
  test('renders Modal', () => {
    renderWithWrapper({
      component: (
        <Modal show={false} data-testid="modal-test">
          Some Content
        </Modal>
      ),
    })

    const modalElement = screen.getByTestId('modal-test')
    expect(modalElement).toBeInTheDocument()
  })

  test('renders close button', () => {
    renderWithWrapper({ component: <Modal show closeButton="right" /> })

    const closeButton = screen.getByRole('button')
    expect(closeButton).toHaveStyle('right: 0')
  })

  test('check the clicking of close button', () => {
    const onCloseClick = jest.fn()
    renderWithWrapper({
      component: (
        <Modal show closeButton="right" onHideClick={onCloseClick}>
          <div data-testid="modal-content">Test</div>
        </Modal>
      ),
    })

    const childElement = screen.getByTestId('modal-content')
    expect(childElement).toHaveTextContent(/Test/i)

    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)
    expect(onCloseClick).toHaveBeenCalledTimes(1)
  })
})
