import React, { FocusEvent, KeyboardEventHandler, useEffect } from 'react'
import { MultiValue } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { twMerge } from 'tailwind-merge'
import ErrorMessage from './ErrorMessage'

interface Option {
  readonly label: string
  readonly value: string
}

export interface MultiSelectCreatableProps {
  name: string
  label?: string
  placeholder?: string
  value: MultiValue<Option>
  onChange: (obj: MultiValue<Option>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement, Element>) => void
  error?: string
  className?: string
}

const createOption = (label: string) => ({
  label,
  value: label,
})

const MultiSelectCreatable = ({
  label,
  name,
  value: initialValue,
  onChange,
  onBlur,
  error,
  className,
  ...props
}: MultiSelectCreatableProps) => {
  const [inputValue, setInputValue] = React.useState('')
  const [value, setValue] = React.useState<MultiValue<Option>>(initialValue)

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return
    switch (event.key) {
      case 'Enter':
      case 'Tab':
      case ',':
        setValue((prev) => [...prev, createOption(inputValue)])
        setInputValue('')
        event.preventDefault()
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (inputValue) {
      setValue((prev) => [...prev, createOption(inputValue)])
      setInputValue('')
      if (onBlur) onBlur(e)
    }
  }

  useEffect(() => {
    onChange(value)
  }, [value, onChange])

  return (
    <div className={className}>
      {label && (
        <label className="font-semibold mb-1 block leading-none" htmlFor={name}>
          {label}
        </label>
      )}
      <CreatableSelect
        isMulti
        onKeyDown={handleKeyDown}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        onBlur={handleBlur}
        onInputChange={(newValue) => setInputValue(newValue)}
        inputValue={inputValue}
        value={value}
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
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
}

export default MultiSelectCreatable
