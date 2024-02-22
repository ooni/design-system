import React, { ReactNode } from 'react'

interface ErrorMessageProps {
  children: ReactNode
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className="mt-1 text-sm text-red-700">{children}</p>
}

export default ErrorMessage
