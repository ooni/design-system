import React, { forwardRef } from 'react'
import { CheckboxProps, LabelProps } from 'types'
// import { props as systemProps } from '@styled-system/should-forward-prop'
import Box from './Box'
import Label from './Label'

// const rebassProps = [...systemProps, 'sx', 'variant']

// const PRE = new RegExp(`^(${rebassProps.join('|')})$`)

// const getProps = (test) => (props) => {
//   const next = {}
//   for (const key in props) {
//     if (test(key || '')) next[key] = props[key]
//   }
//   return next
// }

// const getSystemProps = getProps((k) => PRE.test(k))

export interface ICheckbox extends LabelProps {
  // error?: string | undefined
  name: string
  label: string
}

const Checkbox = forwardRef(
  (
    { className, sx, name, label, variant = 'checkbox', ...props }: ICheckbox,
    ref
  ) => (
    <Label
      htmlFor={name}
      css={{
        gap: '0.5em',
        display: 'grid',
        gridTemplateColumns: '1em auto',
        alignItems: 'center',
      }}
      {...props}
    >
      <Box
        as="input"
        ref={ref}
        type="checkbox"
        id={name}
        {...props}
        __css={{
          color: 'blue5',
          appearance: 'none',
          margin: 0,
          font: 'inherit',
          width: '1.25em',
          height: '1.25em',
          border: '0.07em solid gray',
          display: 'grid',
          placeContent: 'center',
          '&::before': {
            backgroundColor: 'currentColor',
            content: '""',
            width: '0.75em',
            height: '0.75em',
            transform: 'scale(0)',
            transition: '120ms transform ease-in-out',
          },
          '&:checked::before': {
            transform: 'scale(1)',
          },
          '&:focus': {
            outline: 'max(1px, 0.02em) solid currentColor',
            outlineOffset: 'max(1px, 0.15em)',
          },
        }}
      />
      {label}
    </Label>
  )
)

export default Checkbox

// <Box>
//   <Box
//     ref={ref}
//     as="input"
//     type="checkbox"
//     {...props}
//     sx={{
//       position: 'absolute',
//       opacity: 0,
//       zIndex: -1,
//       width: 1,
//       height: 1,
//       overflow: 'hidden',
//     }}
//   />
//   <Box
//     as={CheckboxIcon}
//     aria-hidden="true"
//     tx="forms"
//     variant={variant}
//     className={className}
//     sx={sx}
//     {...getSystemProps(props)}
//     __css={{
//       mr: 2,
//       borderRadius: 4,
//       color: 'gray',
//       'input:checked ~ &': {
//         color: 'primary',
//       },
//       'input:focus ~ &': {
//         color: 'primary',
//         bg: 'highlight',
//       },
//     }}
//   />
// </Box>
