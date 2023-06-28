import React from 'react'
import { BoxProps } from 'types'
import Box from './Box'

const Hero = (props: BoxProps) => {
  return <Box variant="hero" {...props} />
}

export default Hero
