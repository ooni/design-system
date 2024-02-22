import React from 'react'
import Select from 'react-select'
import ErrorMessage from './ErrorMessage'

export interface MultiSelectProps {
  label?: string
  options: { label: string; value: string | number }[]
  name: string
  className?: string
  error?: string
}

const MultiSelect = ({
  label,
  name,
  options,
  className,
  error,
  ...props
}: MultiSelectProps) => (
  <div className={className}>
    {label && (
      <label className="font-semibold mb-1 block" htmlFor={name}>
        {label}
      </label>
    )}
    <Select
      options={options}
      isMulti
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderRadius: '32px',
          minHeight: '36.5px',
          borderWidth: '1px',
          boxShadow: 'none',
          paddingLeft: '5px',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          padding: '7px',
        }),
        multiValue: (baseStyles) => ({
          ...baseStyles,
          borderRadius: '20px',
        }),
        multiValueRemove: () => ({
          svg: { display: 'none' },
          '&:before': {
            content: '"✕"',
            fontSize: '80%',
            padding: '0 6px 0 4px',
          },
        }),
      }}
      classNames={{
        control: (state) =>
          state.isFocused
            ? 'border-blue-500 hover:border-blue-500'
            : 'border-grey-700 hover:border-gray-800',
        multiValue: () => 'bg-gray-300',
        multiValueRemove: () => 'hover:cursor-pointer text-red-700',
      }}
      {...props}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </div>
)

export default MultiSelect
