import React, { forwardRef } from 'react'
import ErrorMessage from './ErrorMessage'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string
  label?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, label, name, className, ...props }, ref) => {
    return (
      <div className={className}>
        {label && (
          <label
            className="font-semibold mb-1 block leading-none"
            htmlFor={name}
          >
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
            disabled:bg-gray-300
            disabled:hover:border-gray-600
            ${error
              ? 'border-red-700 hover:border-red-900 focus:border-red-700'
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
