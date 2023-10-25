import React, { forwardRef, KeyboardEventHandler, useEffect } from 'react'
import CreatableSelect from 'react-select/creatable'
import { SelectProps as SP } from 'types'
import { MultiValue } from 'react-select'
import theme from '../theme'
import { getMarginProps, omitMarginProps } from '../utils'
import Box from './Box'
import Text from './Text'
import ErrorMessage from './ErrorMessage'

interface Option {
  readonly label: string
  readonly value: string
}

export interface MultiSelectCreatableProps
  extends Omit<SP, 'value' | 'onChange'> {
  label?: string
  placeholder?: string
  value: MultiValue<Option>
  onChange: (obj: MultiValue<Option>) => void
  error?: string
}

const createOption = (label: string) => ({
  label,
  value: label,
})

const MultiSelectCreatable = forwardRef(
  (
    {
      label,
      name,
      value: initialValue,
      onChange,
      error,
      ...rest
    }: MultiSelectCreatableProps,
    ref,
  ) => {
    const [inputValue, setInputValue] = React.useState('')
    const [value, setValue] = React.useState<MultiValue<Option>>(initialValue)

    const handleKeyDown: KeyboardEventHandler = (event) => {
      if (!inputValue) return
      // eslint-disable-next-line default-case
      switch (event.key) {
        case 'Enter':
        case 'Tab':
        case ',':
          setValue((prev) => [...prev, createOption(inputValue)])
          setInputValue('')
          event.preventDefault()
      }
    }

    const handleBlur = () => {
      if (inputValue) {
        setValue((prev) => [...prev, createOption(inputValue)])
        setInputValue('')
      }
    }

    useEffect(() => onChange(value), [value, onChange])

    return (
      <Box {...getMarginProps(rest)}>
        {label && (
          <Text
            fontWeight={600}
            mb={1}
            display="block"
            as="label"
            htmlFor={name}
          >
            {label}
          </Text>
        )}
        <CreatableSelect
          ref={ref}
          isMulti
          onKeyDown={handleKeyDown}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          onBlur={handleBlur}
          onInputChange={(newValue) => setInputValue(newValue)}
          inputValue={inputValue}
          value={value}
          {...omitMarginProps(rest)}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              '&:hover': {
                borderColor: state.isFocused
                  ? theme.colors.blue5
                  : theme.colors.gray8,
              },
              borderColor: state.isFocused
                ? theme.colors.blue5
                : theme.colors.gray6,
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
              borderRadius: '10px',
              backgroundColor: theme.colors.gray3,
            }),
            multiValueRemove: () => ({
              svg: { display: 'none' },
              '&:before': {
                content: '"✕"',
                fontSize: '80%',
                padding: '0 6px 0 4px',
              },
              '&:hover': {
                cursor: 'pointer',
                color: theme.colors.red7,
              },
            }),
          }}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Box>
    )
  },
)

export default MultiSelectCreatable
