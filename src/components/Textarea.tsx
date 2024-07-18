import React, { ReactElement, forwardRef } from 'react'
import { TextareaProps as TP } from 'types'
import { getMarginProps, omitMarginProps } from '../utils'
import Box from './Box'
import ErrorMessage from './ErrorMessage'
import Text from './Text'

export interface TextareaProps extends TP {
  error?: string
  fontSize?: number
  label?: string | ReactElement
}

const Textarea = forwardRef(
  ({ error, label, name, ...rest }: TextareaProps, ref) => {
    return (
      <Box {...getMarginProps(rest)}>
        {label && (
          <Text
            fontWeight="bold"
            mb={1}
            display="block"
            as="label"
            htmlFor={name}
          >
            {label}
          </Text>
        )}
        <Box
          ref={ref}
          as="textarea"
          tx="forms"
          name={name}
          id={name}
          variant={error ? 'errorTextarea' : 'textarea'}
          {...omitMarginProps(rest)}
          __css={{
            display: 'block',
            width: '100%',
            p: 2,
            appearance: 'none',
            fontSize: 'inherit',
            lineHeight: 'inherit',
            border: '1px solid',
            borderRadius: 'default',
            color: 'inherit',
            bg: 'transparent',
          }}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Box>
    )
  },
)

export default Textarea
