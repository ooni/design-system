import React from 'react'
import { Box, Text } from 'rebass/styled-components'

export const HeroLead = (props) => (
  <Text variant='heroLead' {...props} />
)

export const Hero = (props) => {
  return (
    <Box variant='hero' {...props} />
  )
}
