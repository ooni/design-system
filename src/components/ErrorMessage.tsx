import React from 'react'
import { twMerge } from 'tailwind-merge'

const ErrorMessage = ({
  children,
  className,
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <p className={twMerge('mt-1 text-sm text-red-700', className)}>
      {children}
    </p>
  )
}

export default ErrorMessage
