import React, { forwardRef } from 'react'
import { CheckboxProps as CP } from 'types'
import { getMarginProps, omitMarginProps } from '../utils'
import Box from './Box'
import Flex from './Flex'

export interface CheckboxProps extends CP {
  error?: string | undefined
  name: string
  label: string
  reverse?: boolean
}

const Checkbox = forwardRef(
  (
    {
      className,
      sx,
      name,
      label,
      variant = 'checkbox',
      reverse = false,
      error,
      ...props
    }: CheckboxProps,
    ref,
  ) => (
    <Flex
      sx={{
        ...(reverse && {
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
        }),
        gap: 2,
      }}
      {...getMarginProps(props)}
    >
      <Box
        as="input"
        ref={ref}
        type="checkbox"
        id={name}
        {...omitMarginProps(props)}
        __css={{
          flexShrink: 0,
          flexGrow: 0,
          color: 'blue5',
          appearance: 'none',
          margin: 0,
          font: 'inherit',
          width: '1.25em',
          height: '1.25em',
          border: '0.07em solid gray',
          display: 'grid',
          placeContent: 'center',
          '&::before': {
            backgroundColor: 'currentColor',
            content: '""',
            width: '0.75em',
            height: '0.75em',
            transform: 'scale(0)',
            transition: '120ms transform ease-in-out',
          },
          '&:checked::before': {
            transform: 'scale(1)',
          },
          '&:focus': {
            outline: 'max(1px, 0.02em) solid currentColor',
            outlineOffset: 'max(1px, 0.15em)',
          },
        }}
      />
      <Box
        as="label"
        htmlFor={name}
        css={{
          overflowWrap: 'anywhere',
        }}
      >
        {label}
      </Box>
    </Flex>
  ),
)

export default Checkbox
