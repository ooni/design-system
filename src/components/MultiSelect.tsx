import React, { forwardRef } from 'react'
import Select from 'react-select'
import { SelectProps } from 'types'
import theme from '../theme'
import { getMarginProps, omitMarginProps } from '../utils'
import Box from './Box'
import Text from './Text'

export interface MultiSelectProps extends SelectProps {
  label?: string
  options: { label: string; value: string | number }[]
}

const MultiSelect = forwardRef(
  ({ label, name, options, ...rest }: MultiSelectProps, ref) => (
    <Box {...getMarginProps(rest)}>
      {label && (
        <Text fontWeight={600} mb={1} display="block" as="label" htmlFor={name}>
          {label}
        </Text>
      )}
      <Select
        ref={ref}
        options={options}
        isMulti
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
  ),
)

export default MultiSelect
