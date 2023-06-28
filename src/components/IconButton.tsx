import React, { ReactNode } from 'react'
import Button, { IButton } from './Button'

export interface IIconButton extends IButton {
  icon: ReactNode
}

const IconButton = ({ icon, ...rest }: IIconButton) => {
  return (
    <Button variant="iconButton" {...rest}>
      {icon}
    </Button>
  )
}

export default IconButton
