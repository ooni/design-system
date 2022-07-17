import React, { FC } from 'react'
import { Box, BoxProps } from 'rebass/styled-components'

const Hero: FC<BoxProps> = (props) => {
  return <Box variant="hero" {...props} />
}

export default Hero
