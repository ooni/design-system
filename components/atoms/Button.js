import React from 'react'
import styled from 'styled-components'

import { stylesToCss, styleMult } from '../util'
import { space, fontSize, color, width } from '../util'

const StyledButton = styled.button`
  // Common

  border: none; // maybe change
  border-radius: ${styleMult(fontSize, 2)};
  display: inline-block;
  height: ${styleMult(fontSize, 2)};
  line-height: ${styleMult(fontSize, 2)};
  padding: 0 ${styleMult(fontSize, 2)};
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
