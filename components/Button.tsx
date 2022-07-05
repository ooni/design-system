import React, { FC } from 'react'
import { Button as RButton, ButtonProps } from 'rebass/styled-components'

interface IButton {
  fontSize: number
  border: number
  inverted: boolean
  hollow: boolean
  variant: string
}

const Button: FC<ButtonProps & IButton> = props => {
  let variant = 'primary'
  if (props.hollow == true) {
    variant = 'hollow'
  }
  if (props.inverted == true) {
    variant = 'inverted'
  }
  if (props.disabled == true) {
    variant += '-disabled'
  }
  if (props.variant !== undefined) {
    variant = props.variant
  }

  return (
    <RButton
      {...props}
      variant={variant}
      sx={{
        borderWidth: props.border,
      }}
    />
  )
}

Button.defaultProps = {
  fontSize: 1,
  border: 2,
}

export default Button
