import React, { forwardRef } from 'react'
import { ImageProps } from 'types'
import Box from './Box'

const Image = forwardRef((props: ImageProps, ref) => (
  <Box
    ref={ref}
    as="img"
    {...props}
    __css={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
))

export default Image
