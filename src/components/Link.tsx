import React, { forwardRef } from 'react'
import { LinkProps } from 'types'
import Box from './Box'

const Link = forwardRef((props: LinkProps, ref) => (
  <Box ref={ref} as="a" variant="link" {...props} />
))

export default Link
