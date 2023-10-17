import React, { forwardRef } from 'react'
import { RadioProps } from 'types'
import Box from './Box'
import Label from './Label'
import { getMarginProps, omitMarginProps } from '../utils'

export interface RadioButtonProps extends RadioProps {
  label?: string
}

const RadioButton = forwardRef(
  ({ label, name, id, ...rest }: RadioButtonProps, ref) => {
    return (
      <Label
        htmlFor={id}
        css={{
          gap: '0.5em',
          lineHeight: '1.1',
          display: 'grid',
          gridTemplateColumns: '1em auto',
          color: 'gray4',
          alignItems: 'center',
        }}
        {...getMarginProps(rest)}
      >
        <Box
          ref={ref}
          as="input"
          type="radio"
          id={id}
          {...omitMarginProps(rest)}
          __css={{
            appearance: 'none',
            font: 'inherit',
            color: 'blue5',
            width: '1.25em',
            height: '1.25em',
            borderWidth: '0.07em',
            borderStyle: 'solid',
            borderColor: 'gray4',
            borderRadius: '50%',
            transform: 'translateY(-0.075em)',
            display: 'grid',
            placeContent: 'center',
            '&::before': {
              content: '""',
              width: '0.75em',
              height: '0.75em',
              borderRadius: '50%',
              transform: 'scale(0)',
              transition: '120ms transform ease-in-out',
              boxShadow: 'inset 1em 1em currentColor',
            },
            '&:checked::before': {
              transform: 'scale(1)',
            },
            '&:focus': {
              outline: 'max(1px, 0.05em) solid currentColor',
              outlineOffset: 'max(1px, 0.15em)',
            },
          }}
        />
        {label}
      </Label>
    )
  },
)

export default RadioButton
