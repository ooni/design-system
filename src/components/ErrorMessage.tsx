import React, { ReactNode } from 'react'
import Text from './Text'

interface IErrorMessage {
  children: ReactNode
}

const ErrorMessage = ({ children }: IErrorMessage) => {
  return (
    <Text mt="2px" variant="error">
      {children}
    </Text>
  )
}

export default ErrorMessage
