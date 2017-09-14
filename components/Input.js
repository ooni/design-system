import React from 'react'

import { space, width, fontSize, color } from 'styled-system'
import styled from 'styled-components'

export const Input = styled.input`
  $space;
  $width;
  $fontSize;
  $color;

  font-family: inherit;
  font-size: 1rem;
  display: 'block';
  vertical-align: 'middle';

  background-color: transparent;

  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.gray2};
  border-radius: 0;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;

  outline: none;
  width: 100%;
  height: 2rem;

  box-shadow: none;
  box-sizing: content-box;
  transition: all .3s;

  &:focus:not([readonly]) {
    border-bottom: 1px solid ${props => props.theme.colors.base};
    box-shadow: 0 1px 0 0 ${props => props.theme.colors.gray1};
  }
`
export default Input
