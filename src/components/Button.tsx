import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const buttonStyles = cva(
  'flex items-center justify-center rounded-full font-medium border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-white focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'border-blue-500 hover:bg-blue-700 hover:border-blue-700',
        dark: 'border-black hover:bg-gray-500 hover:border-gray-500',
        white: '',
        danger: 'bg-red-400 text-white focus:ring-red-400',
      },
      hollow: {
        true: 'bg-transparent',
      },
      transparent: {
        true: 'bg-transparent border-0',
      },
      size: {
        s: 'px-4 py-1 text-sm',
        m: 'px-6 py-2 text-base',
        l: 'px-8 py-2 text-2xl',
        xl: 'px-16 py-3.5 text-2xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'm',
      hollow: false,
    },
    compoundVariants: [
      {
        variant: 'primary',
        hollow: true,
        class:
          'text-blue-500 hover:text-blue-500 hover:text-white hover:bg-blue-100 hover:border-blue-500',
      },
      {
        variant: 'primary',
        hollow: false,
        class: 'bg-blue-500 text-white',
      },
      {
        variant: 'dark',
        hollow: true,
        class:
          'bg-transparent text-black hover:text-black hover:text-white hover:bg-gray-100 hover:border-black',
      },
      {
        variant: 'dark',
        hollow: false,
        class: 'bg-black text-white',
      },
    ],
  },
)

export interface Props
  extends VariantProps<typeof buttonStyles>,
    React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit'
  loading?: boolean
  disabled?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  children: React.ReactNode
}

const Button = ({
  variant,
  hollow,
  disabled = false,
  size,
  type = 'button',
  loading = false,
  startIcon,
  endIcon,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={buttonStyles({ variant, size, hollow })}
      {...props}
      disabled={disabled}
      type={type}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  )
}

export default Button
