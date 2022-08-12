import React, { FC } from 'react'
import {
  Textarea as RebassTextarea,
  TextareaProps,
} from '@rebass/forms/styled-components'
import ErrorMessage from './ErrorMessage'

export interface ITextarea extends TextareaProps {
  error?: string
  fontSize?: number
}

const Textarea: FC<ITextarea> = (props) => {
  const { error, fontSize, ...rest } = props

  return (
    <div>
      <RebassTextarea {...rest} variant={error ? 'error' : 'forms.input'} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  )
}

Textarea.defaultProps = {
  error: undefined,
  fontSize: 1,
}

export default Textarea
