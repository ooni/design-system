import React, { FC } from 'react'
import { Button as RButton, ButtonProps } from 'rebass/styled-components'

export interface IButton extends ButtonProps {
  fontSize?: number
  border?: number
  inverted?: boolean
  hollow?: boolean
  variant?: string
}

const Button: FC<IButton> = (props) => {
  let componentVariant = 'primary'

  const { hollow, inverted, disabled, variant, border } = props

  if (hollow) {
    componentVariant = 'hollow'
  }
  if (inverted) {
    componentVariant = 'inverted'
  }
  if (disabled) {
    componentVariant += '-disabled'
  }
  if (variant !== undefined) {
    componentVariant = variant
  }

  return (
    <RButton
      {...props}
      variant={componentVariant}
      sx={{
        borderWidth: border,
      }}
    />
  )
}

Button.defaultProps = {
  fontSize: 1,
  border: 2,
}

export default Button
