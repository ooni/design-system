import React, { ReactNode } from 'react'
import Text from './Text'

interface ErrorMessageProps {
  children: ReactNode
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <Text mt="2px" variant="error">
      {children}
    </Text>
  )
}

export default ErrorMessage
