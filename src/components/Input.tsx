import React, { forwardRef } from 'react'
import ErrorMessage from './ErrorMessage'

export interface InputProps {
  error?: string
  label?: string
  name: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, name, label, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label className="font-semibold mb-1 block" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          type="text"
          id={name}
          name={name}
          className={`
            appearance-none
            m-0
            py-2
            px-4
            block 
            w-full
            bg-white
            align-middle 
            box-border 
            rounded-full 
            border
            outline-none
            ${
              error
                ? 'border-red-700 hover:border-red-700 focus:border-red-700'
                : 'border-gray-600 hover:border-gray-800 focus:border-blue-500'
            }
          `}
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    )
  },
)

export default Input
