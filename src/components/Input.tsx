import React, { FC } from 'react'
import {
  Input as RebassInput,
  InputProps,
} from '@rebass/forms/styled-components'
import ErrorMessage from './ErrorMessage'

export interface IInput extends InputProps {
  error?: string
  fontSize?: number
}

const Input: FC<IInput> = (props) => {
  const { error, fontSize, ...rest } = props

  return (
    <div>
      <RebassInput {...rest} variant={error ? 'error' : 'forms.input'} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
}

Input.defaultProps = {
  error: undefined,
  fontSize: 1,
}

export default Input
