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
  if (props.variant !== undefined) {
    variant = props.variant
  }
  return <RButton
    {...props}
    variant={variant}
    sx={{
      borderWidth: props.border
    }}
  />
}

Button.propTypes = {
  fontSize: PropTypes.number,
  inverted: PropTypes.bool,
  hollow: PropTypes.bool,
  border: PropTypes.number,
  variant: PropTypes.string
}

Button.defaultProps = {
  fontSize: 1,
  border: 2
}

export default Button
