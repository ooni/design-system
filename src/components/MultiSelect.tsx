import React from 'react'
import Select from 'react-select'
import { twMerge } from 'tailwind-merge'
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
      <label className="font-semibold mb-1 block leading-none" htmlFor={name}>
        {label}
      </label>
    )}
    <Select
      options={options}
      isMulti
      styles={{
        control: () => ({
          outline: '0',
          transition: 'all 100ms',
          borderStyle: 'solid',
          boxSizing: 'border-box',
          borderRadius: '32px',
          minHeight: '36.5px',
          boxShadow: 'none',
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
            padding: '0 8px 0 4px',
          },
        }),
      }}
      classNames={{
        control: (state) =>
          twMerge(
            'flex flex-wrap cursor-default items-center relative border',
            state.isFocused
              ? 'border-blue-500 hover:border-blue-500'
              : 'border-gray-600 hover:border-gray-800',
          ),
        multiValue: () => 'bg-gray-300',
        multiValueRemove: () =>
          'hover:cursor-pointer hover:text-red-700 self-center',
      }}
      {...props}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </div>
)

export default MultiSelect
