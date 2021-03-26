/* global describe, test, expect, jest */
import React from 'react'
import { fireEvent } from '@testing-library/react'

import { renderWithTheme } from './index'
import { Modal } from '../components'

describe('Modal', () => {
  test('renders', () => {
    const { container } = renderWithTheme(
      <Modal show={false}>Some Content</Modal>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with close button', () => {
    const { container } = renderWithTheme(
      <Modal closeButton='right' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('close button click handler is called', () => {
    const onCloseClick = jest.fn()
    const { getByText, getByRole, debug } = renderWithTheme(
      <Modal
        show={true}
        closeButton='right'
        onHideClick={onCloseClick}
      >
        <div> Test </div>
      </Modal>
    )
    expect(getByText('Test')).toBeTruthy()
    const closeButton = getByRole('button')
    fireEvent.click(closeButton)
    expect(onCloseClick).toHaveBeenCalledTimes(1)
  })

})
