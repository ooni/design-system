import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { space, fontSize, fontSizeMult, color, width } from '../util'

const CardStyled = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}

  border: none; // maybe change
  border-radius: 10px;


  ${fontSizeMult('padding', 2)}
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.38);
`

const CardClickable = styled(CardStyled)`
  margin-top: 2px;
  margin-bottom: 2px;
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
  if (props.onClick) {
    return (
      <CardClickable {...props} onClick={props.onClick}>
        {props.children}
      </CardClickable>
    )
  }

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
