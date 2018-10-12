/* global describe, test, expect, jest */
import React from 'react'
import { renderJSON, shallowWithTheme } from './index'
import { Modal } from '../components'

describe('Modal', () => {
  test('renders', () => {
    const json = renderJSON(
      <Modal />
    )
    expect(json).toMatchSnapshot()
  })

  test('renders with close button', () => {
    const json = renderJSON(
      <Modal closeButton='right' />
    )
    expect(json).toMatchSnapshot()
  })

  test('close button click handler is called', () => {
    const onCloseClick = jest.fn()
    const wrapper = shallowWithTheme(
      <Modal show={true} closeButton='right' onHideClick={onCloseClick} />
    )
    wrapper.find('Modal__StyledCloseButton').simulate('click')
    wrapper.find('Modal__StyledModalBackdrop').simulate('click')
    expect(onCloseClick).toHaveBeenCalledTimes(2)
  })

})
