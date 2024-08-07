import React, { ReactNode } from 'react'

export interface IconButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

const IconButton = ({ icon, ...rest }: IconButtonProps) => {
  return <button {...rest}>{icon}</button>
}

export default IconButton
