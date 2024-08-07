import React, { forwardRef } from 'react'

type RadioButtonProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  label: string
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, name, className, ...props }, ref) => {
    return (
      <div className={className}>
        <label
          htmlFor={name}
          className="grid grid-cols-[1em_auto] items-center gap-2"
        >
          <input
            ref={ref}
            type="radio"
            id={name}
            name={name}
            className="
              appearance-none
              text-blue-500
              w-5
              h-5
              border
              border-gray-400
              bg-white
              grid
              place-content-center
              rounded-full
              before:content-['']
              before:bg-current
              before:block
              before:w-3
              before:h-3
              before:rounded-full
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
          {label}
        </label>
      </div>
    )
  },
)

export default RadioButton
