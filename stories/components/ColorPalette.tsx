import React from 'react'
import { Box, Text } from '../../src'

type ColorPaletteProps = {
  color: string
  name: string
}
export const ColorPalette = ({ color, name }: ColorPaletteProps) => (
  <div>
    <Box px={1} py={3}>
      <Box px={3} py={3} bg={color} />
      <Text fontWeight="bold">{name}</Text>
      <Text>{color}</Text>
    </Box>
  </div>
)
export default ColorPalette
