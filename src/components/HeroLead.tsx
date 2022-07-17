import React, { FC } from 'react'
import { TextProps } from 'rebass'
import Text from './Text'

const HeroLead: FC<TextProps> = (props) => (
  <Text variant="heroLead" {...props} />
)

export default HeroLead
