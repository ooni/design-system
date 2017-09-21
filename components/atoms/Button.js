import React from 'react'
import styled from 'styled-components'

import { space, fontSize, fontSizeMult, color, width } from '../util'

const StyledButton = styled.button`
  // Common

  border: none; // maybe change
  ${fontSizeMult('borderRadius', 2)}

  display: inline-block;
  ${fontSizeMult('height', 3)}
  line-height: 1;
  ${fontSizeMult('paddingLeft', 2)}
  ${fontSizeMult('paddingRight', 2)}
  text-transform: uppercase;
  vertical-align: middle;
  // Gets rid of tap active state
  -webkit-tap-highlight-color: transparent;

  outline: 0;

  // Specific
  font-family: inherit;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue5};

  text-align: center;
  letter-spacing: .5px;
  z-index: 1;
  transition: .2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.blue4};
  }
  &:active {
    transition: .2s ease-in;
    background-color: ${props => props.theme.colors.blue6};
  }
`

export const Button = StyledButton.extend`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
Button.defaultProps = {
  fontSize: [3, 2]
}
export default Button
