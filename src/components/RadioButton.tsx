import React, { FC } from 'react'
import { Label, Radio, RadioProps } from '@rebass/forms/styled-components'

export interface IRadioButton extends RadioProps {
  label?: string
}

const RadioButton: FC<IRadioButton> = (props) => {
  const { label, ...rest } = props

  return (
    <Label alignItems="center">
      <Radio {...rest} />
      {label}
    </Label>
  )
}

export default RadioButton
