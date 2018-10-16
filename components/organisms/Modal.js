import React from 'react'
import PropTypes from 'prop-types'

import MdClose from 'react-icons/lib/md/close'

import styled from 'styled-components'
import {
  space,
  px,
  fontSize,
  color,
  width,
  height
} from '../util'

import IconButton from '../atoms/IconButton'

const StyledModalContent = styled.div`
  ${space}
  ${width}
  ${height}
  ${fontSize}
  ${color}

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  z-index: 1050;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => px(props.theme.radius)};
`

const StyledModal = styled.div`
  position: relative;
  ${props => props.show ? '' : 'display: none;'}
`

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: ${props => props.theme.colors.black};
  transition: opacity 5s linear;
  opacity: 0.5;
`

const StyledCloseButton = styled(IconButton)`
  position: absolute;
  top: 0;
  ${props => props.position ? `${props.position}: 0;` : ''}
  height: 28px;
  padding: 0;
  margin: 0;
`

export const Modal = (props) => {
  return (
    <StyledModal show={props.show}>
      <StyledModalContent {...props}>
        {props.closeButton && <StyledCloseButton onClick={props.onHideClick} icon={<MdClose/>} position={props.closeButton} />}
        {React.Children.map(props.children, child => React.cloneElement(child), props)}
      </StyledModalContent>
      {props.show && <StyledModalBackdrop onClick={props.onHideClick} />}
    </StyledModal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  onHideClick: PropTypes.func,
  closeButton: PropTypes.string
}

Modal.defaultProps = {
  onHideClick: () => {}
}

export default Modal
