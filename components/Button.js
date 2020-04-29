import PropTypes from 'prop-types'
import React from 'react'
import { Button as RButton } from 'rebass/styled-components'

export const Button = props => {
  let variant = 'primary'
  if (props.hollow == true) {
    variant = 'hollow'
  }
  if (props.inverted == true) {
    variant = 'inverted'
  }
  return <RButton
    {...props}
    variant={variant}
    sx={{
    }}
  />
}

Button.propTypes = {
  fontSize: PropTypes.number,
  inverted: PropTypes.bool,
  hollow: PropTypes.bool,
  border: PropTypes.number
}

Button.defaultProps = {
  fontSize: 1,
  inverted: false,
  hollow: false,
  border: 2
}

export default Button
