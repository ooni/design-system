import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { space, fontSize, fontSizeMult, color, width } from '../util'

const StyledButton = styled.button`
  // Common

  border: none; // maybe change
  ${fontSizeMult('border-radius', 2)}

  display: inline-block;
  ${fontSizeMult('height', 2.5)}
  line-height: 1;
  ${fontSizeMult('padding-left', 2)}
  ${fontSizeMult('padding-right', 2)}
  text-transform: uppercase;
  vertical-align: middle;
  // Gets rid of tap active state
  -webkit-tap-highlight-color: transparent;

  outline: 0;

  // Specific
  font-family: inherit;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.inverted ? props.theme.colors.blue5 : props.theme.colors.white};
  background-color: ${props => props.inverted ? props.theme.colors.white : props.theme.colors.blue5};

  text-align: center;
  letter-spacing: .5px;
  z-index: 1;
  transition: .2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.inverted ? props.theme.colors.gray1 : props.theme.colors.blue4};
  }
  &:active {
    transition: .2s ease-in;
    background-color: ${props => props.inverted ? props.theme.colors.gray2 : props.theme.colors.blue6};
  }
`

export const Button = StyledButton.extend`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
Button.defaultProps = {
  fontSize: 1,
  inverted: false
}
export default Button
