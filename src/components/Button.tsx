import React, { forwardRef } from 'react'
import { ButtonProps } from 'types'
import Box from './Box'

type Size = 'small' | 'medium' | 'large' | 'xLarge' | null
type BaseVariants = 'primary' | 'hollow' | 'inverted'
type AdditionalVariats =
  | 'iconButton'
  | 'link'
  | 'facebookShare'
  | 'twitterShare'
type Variant = BaseVariants | AdditionalVariats | `${BaseVariants}-disabled`
export interface IButton extends ButtonProps {
  disabled?: boolean
  inverted?: boolean
  hollow?: boolean
  loading?: boolean
  spinner?: React.ReactNode
  variant?: Variant
  btnSize?: Size
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = forwardRef(
  (
    {
      hollow = false,
      inverted = false,
      disabled = false,
      variant,
      btnSize = 'medium',
      loading = false,
      spinner,
      children,
      ...rest
    }: IButton,
    ref,
  ) => {
    let size = btnSize
    let componentVariant = 'primary'
    if (variant === 'link' || variant === 'iconButton') size = null

    if (hollow) componentVariant = 'hollow'
    if (inverted) componentVariant = 'inverted'
    if (disabled) componentVariant += '-disabled'

    if (variant !== undefined) {
      componentVariant = variant
    }

    const sizeCss = (s: Size) => {
      switch (s) {
        case 'small':
          return {
            fontSize: 14,
            height: 32,
            px: 3,
          }
        case 'medium':
          return {
            fontSize: 1,
            height: 40,
            px: 24,
          }
        case 'large':
          return {
            fontSize: 2,
            height: 48,
            px: 4,
          }
        case 'xLarge':
          return {
            fontSize: 2,
            height: 60,
            borderRadius: 48,
            px: 5,
          }
        default:
          return {}
      }
    }

    return (
      <Box
        ref={ref}
        as="button"
        tx="buttons"
        variant={componentVariant}
        {...rest}
        sx={{ ...sizeCss(size), ...rest?.sx }}
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
