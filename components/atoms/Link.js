import React from 'react'
import { Link } from 'rebass'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: ${props => props.color || props.theme.colors.blue5};
  text-decoration: none;

  &:hover {
    filter: brightness(125%);
  }
`

export default StyledLink
