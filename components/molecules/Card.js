import React from 'react'
import PropTypes from 'prop-types'
import { Card as RebassCard } from 'rebass/styled-components'

export const Card = (props) => {
  return (
    <RebassCard {...props} onClick={props.onClick} variant={props.onClick ? 'clickableCard' : 'card'}>
      {props.children}
    </RebassCard>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Card
