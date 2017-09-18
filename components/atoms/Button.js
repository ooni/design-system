import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

import { stylesToCss, styleMult } from '../util'

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
  ${stylesToCss(space)}
  ${stylesToCss(width)}
  ${stylesToCss(fontSize)}
  ${stylesToCss(color)}
`
Button.defaultProps = {
  fontSize: 2
}
export default Button
