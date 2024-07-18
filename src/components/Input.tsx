import React, { forwardRef } from 'react'
import { InputProps as IP } from 'types'
import { getMarginProps, omitMarginProps } from '../utils'
import Box from './Box'
import ErrorMessage from './ErrorMessage'
import Text from './Text'

export interface InputProps extends IP {
  error?: string | undefined
  label?: string
}

const Input = forwardRef(({ error, name, label, ...rest }: InputProps, ref) => {
  return (
    <Box {...getMarginProps(rest)}>
      {label && (
        <Text fontWeight={600} mb={1} display="block" as="label" htmlFor={name}>
          {label}
        </Text>
      )}
      <Box
        ref={ref}
        as="input"
        type="text"
        tx="forms"
        id={name}
        name={name}
        variant={error ? 'errorInput' : 'forms.input'}
        {...omitMarginProps(rest)}
        __css={{
          display: 'block',
          width: '100%',
          appearance: 'none',
          fontSize: 'inherit',
          lineHeight: 'inherit',
          color: 'inherit',
          bg: 'transparent',
        }}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
  )
})

export default Input
