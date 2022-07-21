import React, { FC, ReactNode } from 'react'
import { Flex, Box, Text } from 'rebass/styled-components'
import {
  Input as RebassInput,
  InputProps,
  Textarea,
  TextareaProps,
} from '@rebass/forms/styled-components'
import { MdWarning } from 'react-icons/md'

interface IErrorMessage {
  children: ReactNode
}

const ErrorMessage: FC<IErrorMessage> = ({ children }) => {
  return (
    <Flex flexWrap="wrap" mt={3}>
      <Box>
        <Text variant="error">{children}</Text>
      </Box>
      <Box ml="auto" width={16} flex="none">
        <Text variant="error">
          <MdWarning />
        </Text>
      </Box>
    </Flex>
  )
}

type RebassProps = InputProps & TextareaProps

export interface IInput extends RebassProps {
  type?: string
  error?: ReactNode
  fontSize?: number
  rows?: number
}

const Input: FC<IInput> = (props) => {
  const { type, error, fontSize, rows, ...rest } = props

  if (type === 'textarea') {
    return (
      <div>
        <Textarea
          {...rest}
          rows={rows}
          variant={error ? 'error' : 'forms.input'}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    )
  }

  return (
    <div>
      <RebassInput
        {...rest}
        type={type}
        variant={error ? 'error' : 'forms.input'}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  error: null,
  fontSize: 1,
  rows: 3,
}

export default Input
