import React, { FC, ReactNode } from 'react'
import { ButtonProps, Button } from 'rebass/styled-components'

interface IIconnButton {
  icon?: ReactNode
}

const IconButton: FC<ButtonProps & IIconnButton> = props => {
  const { icon, onClick, ...rest } = props

  return (
    <Button variant="iconButton" {...rest}>
      {props.icon}
    </Button>
  )
}

export default IconButton
