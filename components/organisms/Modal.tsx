import React, { FC, ReactNode } from 'react'
import { Box } from 'rebass/styled-components'
import { MdClose } from 'react-icons/md'
import IconButton from '../atoms/IconButton'

interface IModalCloseButton {
  position: string
  icon: ReactNode
  onClick: () => void
}

const ModalCloseButton: FC<IModalCloseButton> = ({
  position,
  icon,
  onClick,
}) => (
  <IconButton
    css={{
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
  />
)

interface IModal {
  show: boolean
  closeButton: string
  children: ReactNode
  onHideClick: () => void
}

export const Modal: FC<IModal> = ({
  show,
  closeButton,
  onHideClick,
  children,
  ...props
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: show ? 'inherit' : 'none',
      }}
    >
      <Box
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
          borderRadius: 'radius',
          ...props,
        }}
      >
        {closeButton && (
          <ModalCloseButton
            onClick={onHideClick}
            icon={<MdClose />}
            position={closeButton}
          />
        )}
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
