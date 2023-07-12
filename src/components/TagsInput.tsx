import React, { forwardRef } from 'react'
import { TagsInput as TInput } from 'react-tag-input-component'
import { InputProps } from 'types'
import { getMarginProps, omitMarginProps } from '../utils'
import ErrorMessage from './ErrorMessage'
import Box from './Box'
import Text from './Text'
import theme from '../theme'

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
        __css={{
          '.rti--container': {
            '--rti-s': '7px 16px',
            '--rti-radius': '32px',
            '--rti-border': theme.colors.gray6,
            '--rti-main': theme.colors.blue5,
            '--rti-tag': theme.colors.gray3,
            '&:hover': {
              borderColor: theme.colors.gray8,
            },
            '.rti--tag': {
              fontSize: '85%',
              padding: '4px',
              paddingLeft: '8px',
            },
            '.rti--tag button': { padding: '0 3px 0 4px' },
            lineHeight: 1,
            gap: '4px',
            input: { fontFamily: 'inherit' },
            button: { fontSize: '80%' },
            '&:focus-within': { boxShadow: 'none' },
          },
        }}
      >
        <TInput ref={ref} {...omitMarginProps(rest)} />
      </Box>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
  )
})

export default Input
