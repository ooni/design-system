import React, { forwardRef } from 'react'
import ErrorMessage from './ErrorMessage'

export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  label?: string
  error?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, className, error, ...props }, ref) => (
    <div className={className}>
      {label && (
        <label className="font-semibold mb-1 block" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={name}
        name={name}
        className={`
          appearance-none
          outline-none
          box-border 
          w-full 
          m-0
          py-2
          pl-4
          pr-7
        bg-white
          border
          rounded-full
          cursor-pointer
          block
          bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDEwIDEwIj48Zz48cG9seWdvbiBwb2ludHM9IjggMyA1IDcgMiAzIDggMyIvPjwvZz48L3N2Zz4=')]
          bg-no-repeat
          bg-right
          bg-[length:40px_20px]
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
  ),
)

export default Select
