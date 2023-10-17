import React, { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import { BoxProps } from 'types'
import IconButton from './IconButton'
import Box from './Box'

interface ModalCloseButtonProps {
  position?: 'left' | 'right'
  icon: ReactNode
  onClick?: () => void
}

const ModalCloseButton = ({
  position,
  icon,
  onClick,
}: ModalCloseButtonProps) => (
  <IconButton
    sx={{
      position: 'absolute',
      top: 0,
      height: '28px',
      padding: 0,
      margin: 0,
      left: position === 'left' ? 0 : 'initial',
      right: position === 'right' ? 0 : 'initial',
    }}
    icon={icon}
    onClick={onClick}
    type="button"
  />
)

export interface ModalProps extends BoxProps {
  show?: boolean
  closeButton?: 'left' | 'right'
  onHideClick?: () => void
}

export const Modal = ({
  show = false,
  closeButton = 'right',
  onHideClick,
  children,
  sx,
  ...rest
}: ModalProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: show ? 'inherit' : 'none',
      }}
    >
      <Box
        {...rest}
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '100vw',
          maxHeight: '100vh',
          overflow: 'auto',
          zIndex: 1050,
          bg: 'white',
          ...sx,
        }}
      >
        <ModalCloseButton
          onClick={onHideClick}
          icon={<MdClose size={20} />}
          position={closeButton}
        />
        {children}
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
            opacity: 0.5,
          }}
        />
      )}
    </Box>
  )
}

export default Modal
