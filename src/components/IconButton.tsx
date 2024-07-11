import React, { ReactNode } from 'react'

export interface IconButtonProps {
  icon: ReactNode
}

const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return <button {...rest}>{icon}</button>
}

export default IconButton
