import React, { FC, ReactNode } from 'react'
import { Box, BoxProps } from 'rebass/styled-components'
import { MdClose } from 'react-icons/md'
import IconButton from './IconButton'

interface IModalCloseButton {
  position?: string
  icon: ReactNode
  onClick?: () => void
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

ModalCloseButton.defaultProps = {
  position: undefined,
  onClick: undefined,
}

export interface IModal extends BoxProps {
  show?: boolean
  closeButton?: string
  children?: JSX.Element | JSX.Element[] | ReactNode
  onHideClick?: () => void
}

export const Modal: FC<IModal> = (props) => {
  const { show, closeButton, onHideClick, children, sx, ...rest } = props

  return (
    <Box
      {...rest}
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
          ...sx,
        }}
      >
        {closeButton ? (
          <ModalCloseButton
            onClick={onHideClick}
            icon={<MdClose />}
            position={closeButton}
          />
        ) : null}
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
