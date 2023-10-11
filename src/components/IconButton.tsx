import React, { ChangeEvent, FC, ReactNode } from 'react'
import { ButtonProps, Button } from 'rebass/styled-components'

export interface IIconButton extends ButtonProps {
  icon?: ReactNode
}

const IconButton: FC<IIconButton> = (props) => {
  const { icon, ...rest } = props

  return (
    <Button variant="iconButton" {...rest}>
      {icon}
    </Button>
  )
}

export default IconButton
