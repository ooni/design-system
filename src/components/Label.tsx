import React, { forwardRef } from 'react'

interface LabelProps {
  children?: React.ReactNode
}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => (
  <label
    ref={ref}
    {...props}
    style={{
      width: '100%',
    }}
  />
))

export default Label
