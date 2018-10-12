import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

import Button from './Button'

/* XXX I think there is something weird with the position of this vertically */
const StyledIconButton = styled(Button)`
  ${space}
  ${width}
  ${fontSize}
  ${color}

  border-radius: none;

  color: ${props => props.theme.colors.gray5};
  background-color: transparent;

  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.gray4};
  }
  &:active {
    background-color: transparent;
    color: ${props => props.theme.colors.gray6};
  }
`

export const IconButton = (props) => {
  return (
    <StyledIconButton {...props} onClick={props.onClick}>
      {props.icon}
    </StyledIconButton>
  )
}

IconButton.defaultProps = {
  fontSize: 3
}

IconButton.propTypes = {
  fontSize: PropTypes.number,
  icon: PropTypes.node,
  onClick: PropTypes.func
}
export default IconButton
