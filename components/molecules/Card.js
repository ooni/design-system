import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box } from 'grid-styled'

import styled, { css } from 'styled-components'
import { space, fontSize, fontSizeMult, color, width } from '../util'

import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'

const CardStyled = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}

  border: none; // maybe change
  border-radius: 10px;
  margin-top: 2px;
  margin-bottom: 2px;

  ${fontSizeMult('padding', 2)}
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.38);
  &:hover {
    margin-top: 0px;
    margin-bottom: 4px;
  }

  &:active {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    margin-top: 4px;
    margin-bottom: 0px;
  }
`

export const Card = (props) => {
  return (
    <CardStyled {...props} onClick={props.onClick}>
      {props.children}
    </CardStyled>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

Card.defaultProps = {
  fontSize: 1
}

export default Card
