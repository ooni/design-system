import PropTypes from 'prop-types'
import styled from 'styled-components'

import { space, fontSize, fontSizeMult, color, width, px } from '../util'

const StyledButton = styled.button`
  // Common

  ${fontSizeMult('border-radius', 2)}

  display: inline-block;
  ${fontSizeMult('height', 2.5)}
  line-height: 1;
  ${fontSizeMult('padding-left', 2)}
  ${fontSizeMult('padding-right', 2)}
  text-transform: capitalize;
  vertical-align: middle;
  // Gets rid of tap active state
  -webkit-tap-highlight-color: transparent;

  outline: 0;

  // Specific
  font-family: inherit;
  font-weight: 600;
  text-decoration: none;
  color: ${props => {
    if (!props.hollow) {
      return props.inverted ? props.theme.colors.blue5 : props.theme.colors.white
    }
    return props.inverted ? props.theme.colors.white : props.theme.colors.blue5
  }};

  background-color: ${props => {
    if (!props.hollow) {
      return props.inverted ? props.theme.colors.white : props.theme.colors.blue5
    }
    return 'transparent'
  }};

  border: ${props => {
    if (!props.hollow) {
      return 'none'
    }
    return `${px(props.border)} solid ${props.inverted ? props.theme.colors.white : props.theme.colors.blue5}`
  }};

  text-align: center;
  letter-spacing: .5px;
  z-index: 1;
  transition: .2s ease-out;
  cursor: pointer;

  &:hover {
    border: ${props => {
    if (props.hollow) {
      return `${px(props.border)} solid ${props.inverted ? props.theme.colors.gray1 : props.theme.colors.blue4}`
    }
    return 'none'
  }};
    background-color: ${props => {
    if (!props.hollow) {
      return props.inverted ? props.theme.colors.gray1 : props.theme.colors.blue4
    }
    return 'transparent'
  }};
  }
  &:active {
    transition: .2s ease-in;
    border: ${props => {
    if (props.hollow) {
      return `${px(props.border)} solid ${props.inverted ? props.theme.colors.gray2 : props.theme.colors.blue6}`
    }
    return 'none'
  }};
    background-color: ${props => {
    if (!props.hollow) {
      return props.inverted ? props.theme.colors.gray2 : props.theme.colors.blue6
    }
    return 'transparent'
  }};
  }
`

export const Button = styled(StyledButton)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
Button.propTypes = {
  fontSize: PropTypes.number,
  inverted: PropTypes.bool,
  hollow: PropTypes.bool,
  border: PropTypes.number
}

Button.defaultProps = {
  fontSize: 1,
  inverted: false,
  hollow: false,
  border: 2
}
export default Button
