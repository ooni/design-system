import React from 'react'

import { space, width, fontSize, color } from 'styled-system'
import styled from 'styled-components'

export const Button = styled.button`
  $space;
  $width;
  $fontSize;
  $color;


  // Common

  border: none; // maybe change
  border-radius: ${props => `${props.theme.radius}px`};
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 2rem;
  text-transform: uppercase;
  vertical-align: middle;
  // Gets rid of tap active state
  -webkit-tap-highlight-color: transparent;

  font-size: 1em;
  outline: 0;

  // Specific
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue5};

  text-align: center;
  letter-spacing: .5px;
  z-index: 1;
  transition: .2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.blue6};
    @extend .z-depth-1-half;
  }
`
export default Button
