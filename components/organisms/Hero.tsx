import React, { FC } from 'react'
import { Box, BoxProps, Text, TextProps } from 'rebass/styled-components'

const HeroLead: FC<TextProps> = props => <Text variant="heroLead" {...props} />

const Hero: FC<BoxProps> = props => {
  return <Box variant="hero" {...props} />
}

export { Hero, HeroLead }
