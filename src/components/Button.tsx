import React, { forwardRef } from 'react'
import { ButtonProps } from 'types'
import Box from './Box'

type Size = 'small' | 'medium' | 'large' | 'xLarge' | null
type Color = 'default' | 'dark'
type BaseVariants = 'primary' | 'hollow' | 'inverted'
type AdditionalVariants =
  | 'iconButton'
  | 'link'
  | 'facebookShare'
  | 'twitterShare'
type Variant =
  | BaseVariants
  | AdditionalVariants
  | Size
  | 'disabled'
  | `${BaseVariants}-disabled`
  | Color
  | `${Color}-hollow`
export interface IButton extends ButtonProps {
  disabled?: boolean
  inverted?: boolean
  hollow?: boolean
  loading?: boolean
  spinner?: React.ReactNode
  variant?: Variant
  color?: Color
  size?: Size
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = forwardRef(
  (
    {
      hollow = false,
      inverted = false,
      disabled = false,
      variant = 'primary',
      size = 'medium',
      color = 'default',
      type = 'button',
      loading = false,
      spinner,
      children,
      ...rest
    }: IButton,
    ref,
  ) => {
    let btnSize = size
    let componentVariant = [variant]

    componentVariant.push(size)
    if (disabled) componentVariant.push('disabled')
    if (color) componentVariant.push(`${color}${hollow ? '-hollow' : ''}`)
    if (hollow) componentVariant.push('hollow')
    if (inverted) componentVariant.push('inverted')

    if (variant === 'link' || variant === 'iconButton') {
      btnSize = null
      componentVariant = [variant]
    }

    return (
      <Box
        ref={ref}
        type={type}
        as="button"
        tx="buttons"
        variant={componentVariant}
        {...rest}
        __css={{
          appearance: 'none',
          display: 'inline-block',
          textAlign: 'center',
          lineHeight: 'inherit',
          textDecoration: 'none',
          fontWeight: 'body',
          fontSize: 'inherit',
          border: 0,
          background: 'none',
          padding: 0,
          '&:enabled': { cursor: 'pointer' },
        }}
        disabled={disabled}
      >
        <Box sx={loading ? { visibility: 'hidden', height: '0' } : undefined}>
          {children}
        </Box>
        {loading && spinner}
      </Box>
    )
  },
)

export default Button
