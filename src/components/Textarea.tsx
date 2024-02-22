import React, { forwardRef } from 'react'
import ErrorMessage from './ErrorMessage'

export interface TextareaProps {
  error?: string
  fontSize?: number
  label?: string
  name: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, label, name, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label className="font-semibold mb-1 block" htmlFor={name}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          name={name}
          id={name}
          className={`
            appearance-none
            outline-none
            m-0
            p-2
            block 
            w-full
          bg-white
            align-middle 
            box-border
            rounded
            border
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

export default Textarea
