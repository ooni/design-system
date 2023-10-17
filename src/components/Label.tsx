import React, { forwardRef } from 'react'
import { LabelProps } from 'types'
import Text from './Flex'

const Label = forwardRef((props: LabelProps, ref) => (
  <Text
    ref={ref}
    as="label"
    tx="forms"
    variant="label"
    {...props}
    __css={{
      width: '100%',
    }}
  />
))

export default Label
