import React, { forwardRef } from 'react'
import { InputProps } from 'types'
import { getMarginProps, omitMarginProps } from '../utils'
import ErrorMessage from './ErrorMessage'
import Box from './Box'
import Text from './Text'

export interface IInput extends InputProps {
  error?: string | undefined
  label?: string
}

const Input = forwardRef(({ error, name, label, ...rest }: IInput, ref) => {
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
