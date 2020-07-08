import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

export const IconButton = (props) => {
  return (
    <Button variant='iconButton' {...props} onClick={props.onClick}>
      {props.icon}
    </Button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.node,
  onClick: PropTypes.func
}
export default IconButton
