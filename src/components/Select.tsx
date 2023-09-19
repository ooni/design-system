import React, { forwardRef } from 'react'
import { SelectProps } from 'types'
import { getMarginProps, omitMarginProps } from '../utils'
import Box from './Box'
import Text from './Text'

export interface ISelect extends SelectProps {
  label?: string
}

const Select = forwardRef(({ label, name, ...rest }: ISelect, ref) => (
  <Box {...getMarginProps(rest)}>
    {label && (
      <Text fontWeight={600} mb={1} display="block" as="label" htmlFor={name}>
        {label}
      </Text>
    )}
    <Box
      ref={ref}
      as="select"
      tx="forms"
      variant="select"
      id={name}
      name={name}
      {...omitMarginProps(rest)}
      __css={{
        boxSizing: 'border-box',
        margin: 0,
        display: 'inline-block',
        font: 'inherit',
        width: '100%',
        appearance: 'none',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        color: 'inherit',
        bg: 'transparent',
        backgroundImage:
          'linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%)',
        backgroundPosition: 'calc(100% - 20px), calc(100% - 15px)',
        backgroundSize: '5px 5px, 5px 5px',
        backgroundRepeat: 'no-repeat',
        'html[dir="rtl"] &, body[dir="rtl"] &': {
          backgroundPosition: '15px, 20px',
        },
      }}
    />
  </Box>
))

export default Select
