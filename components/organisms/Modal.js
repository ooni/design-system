import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass/styled-components'
import { MdClose } from 'react-icons/md'

import IconButton from '../atoms/IconButton'

const ModalCloseButton = ({ position, ...props}) => (
  <IconButton
    css={{
      position: 'absolute',
      top: 0,
      height: '28px',
      padding: 0,
      margin: 0,
      left: position === 'left' ? 0 : 'initial',
      right: position === 'right' ? 0 : 'initial'
    }}
    {...props}
  />
)

export const Modal = ({show, closeButton, onHideClick, ...props}) => {
  return (
    <Box sx={{
      position: 'relative',
      display: show ? 'inherit' : 'none'
    }}>
      <Box sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '100vw',
        maxHeight: '100vh',
        overflow: 'auto',
        zIndex: 1050,
        bg: 'white',
        borderRadius: 'radius'
      }}>
        {closeButton && <ModalCloseButton onClick={onHideClick} icon={<MdClose/>} position={closeButton} />}
        {React.Children.map(props.children, child => React.cloneElement(child), props)}
      </Box>
      {show && (
        <Box
          onClick={onHideClick}
          sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1040,
            bg: 'black',
            transition: 'opacity 5s linear',
            opacity: 0.5
          }}
        />
      )}
    </Box>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  onHideClick: PropTypes.func,
  closeButton: PropTypes.string
}

export default Modal
