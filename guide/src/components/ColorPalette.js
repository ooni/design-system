import React from 'react'
import chroma from 'chroma-js'

import {
  Circle,
  Flex,
  Box,
  Text
} from 'rebass'

export const ColorPalette = props => (
  <div>
    <Flex mr={5} mb={5}>
      <Box>
        <Circle size={100} bg={props.color} />
      </Box>
      <Flex justify='center' align='center' ml={3}>
        <Box>
        <Text>{props.name}</Text>
        <Text>{chroma(props.color).rgb()}</Text>
        <Text>{chroma(props.color).hex()}</Text>
        </Box>
      </Flex>
    </Flex>
  </div>
)
export default ColorPalette
