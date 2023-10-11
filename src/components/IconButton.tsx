import React, { ReactNode } from 'react'
import Button, { ButtonProps } from './Button'

export interface IconButtonProps extends ButtonProps {
  icon: ReactNode
}

const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return (
    <Button variant="iconButton" {...rest}>
      {icon}
    </Button>
  )
}

export default IconButton
