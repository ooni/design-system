import React, { forwardRef } from 'react'
import { button } from './ButtonVE.css'
import { sprinkles } from './ButtonVESprinkles.css'

type Size = 's' | 'm' | 'l' | 'xl'
type Variant = 'primary' | 'dark'

console.log(' sprinkles', sprinkles({ textStyle: 'sm' }))

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  inverted?: boolean
  hollow?: boolean
  variant?: Variant
  size?: Size
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button = forwardRef(
  (
    {
      hollow = false,
      inverted = false,
      disabled = false,
      variant = 'primary',
      size = 'm',
      type = 'button',
      children,
      startIcon,
      endIcon,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    return (
      <button
        className={button({
          variant,
          size,
          hollow,
        })}
        type={type}
        {...ref}
        {...rest}
      >
        {startIcon && <span className="icon">{startIcon}</span>}
        {children}
        {endIcon && <span className="icon">{endIcon}</span>}
      </button>
    )
  },
)

export default Button
