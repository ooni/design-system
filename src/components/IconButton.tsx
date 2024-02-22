import React, { ReactNode } from 'react'
import Button from './Button'

export interface IconButtonProps {
  icon: ReactNode
}

const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return <Button {...rest}>{icon}</Button>
}

export default IconButton
