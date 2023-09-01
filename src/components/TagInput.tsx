import React, { forwardRef, KeyboardEventHandler } from 'react'
import CreatableSelect from 'react-select/creatable'
import { SelectProps } from 'types'
import theme from '../theme'
import { getMarginProps, omitMarginProps } from '../utils'
import Box from './Box'
import Text from './Text'

interface Option {
  readonly label: string
  readonly value: string
}

export interface ISelect extends SelectProps {
  label?: string
  placeholder?: string
  onChange: (obj: Option[]) => void
}

const createOption = (label: string) => ({
  label,
  value: label,
})

const TagInput = forwardRef(
  ({ label, name, value: initialValue, onChange, ...rest }: ISelect, ref) => {
    const [inputValue, setInputValue] = React.useState('')
    const [value, setValue] = React.useState<readonly Option[]>(initialValue)

    const handleKeyDown: KeyboardEventHandler = (event) => {
      if (!inputValue) return
      // eslint-disable-next-line default-case
      switch (event.key) {
        case 'Enter':
        case 'Tab':
          setValue((prev) => [...prev, createOption(inputValue)])
          setInputValue('')
          event.preventDefault()
      }
    }

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
          components={{ DropdownIndicator: null }}
          menuIsOpen={false}
          onKeyDown={handleKeyDown}
          onChange={(newValue) => {
            setValue(newValue)
            onChange(newValue)
          }}
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
      </Box>
    )
  },
)

export default TagInput
