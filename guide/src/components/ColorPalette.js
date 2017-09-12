import React from 'react'
import chroma from 'chroma-js'

import {
  Circle,
  Flex,
  Box,
  Text,
  Container
} from 'rebass'

export const ColorPalette = props => (
  <div>
    <Box px={1} py={3}>
      <Box px={3} py={3} bg={props.color}>
      </Box>
      <Text bold>{props.name}</Text>
      <Text>{chroma(props.color).hex()}</Text>
    </Box>
  </div>
)
export default ColorPalette
