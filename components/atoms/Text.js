import React from 'react'
import styled from 'styled-components'

import { space, fontSize, fontSizeMult, color, width } from '../util'

const Text = styled.p`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  line-height: 1.25;
`

Text.defaultProps = {
  f: 1,
  p: 0,
  m: 0
}
export default Text
