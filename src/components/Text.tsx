import React, { forwardRef } from 'react'
import { TextProps } from 'types'
import Box from './Box'

export const Text = forwardRef((props: TextProps, ref) => (
  <Box ref={ref} tx="text" {...props} />
))

export default Text
