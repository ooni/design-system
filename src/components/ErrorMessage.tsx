import React, { FC, ReactNode } from 'react'
import { Flex, Box, Text } from 'rebass/styled-components'
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

export default ErrorMessage
