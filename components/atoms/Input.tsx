import React, { ComponentType, FC, ReactNode } from 'react'
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

interface IInput {
  type: string
  error: ReactNode
  fontSize: number
  rows: number
  onChange: () => void
}

const Input: FC<IInput & InputProps & TextareaProps> = props => {
  const { type, error, fontSize, rows, onChange, ...rest } = props

  let StyledElement:
    | ComponentType<TextareaProps>
    | ComponentType<InputProps> = RebassInput

  if (type === 'textarea') {
    StyledElement = Textarea
  }

  return (
    <div>
      <StyledElement {...rest} variant={error ? 'error' : 'forms.input'} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  error: null,
  fontSize: 1,
  rows: 3,
  onChange: () => {},
}

export default Input
