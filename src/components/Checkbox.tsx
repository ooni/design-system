import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
export interface CheckboxProps {
  error?: string
  name: string
  label: string
  disabled?: boolean
  className?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ name, label, error, disabled = false, className, ...props }, ref) => (
    <>
      <div className={twMerge(`relative flex items-start ${disabled && 'opacity-50'}`, className)}>
        <div className="flex items-center h-5">
          <input
            ref={ref}
            id={name}
            name={name}
            type="checkbox"
            disabled={disabled}
            className="
              text-blue-500
              appearance-none
              rounded-none
              w-5
              h-5
              border
              border-gray-400
              bg-white
              grid
              place-content-center
              before:content-['']
              before:bg-current
              before:block
              before:w-3
              before:h-3
              before:scale-0
              before:transition-transform
              checked:before:scale-100
              focus:outline
              focus:outline-1
              focus:outline-current
              focus:outline-offset-1
              focus:ring-blue-100
            "
            {...props}
          />
        </div>
        <div className="ml-2">
          <label htmlFor={name}>{label}</label>
        </div>
        {/* {error} */}
      </div>
    </>
  ),
)

export default Checkbox
