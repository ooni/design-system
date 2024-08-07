import React from 'react'

type ColorPaletteProps = {
  color: string
  name: string
}
export const ColorPalette = ({ color, name }: ColorPaletteProps) => (
  <div>
    <div className="px-1 py-4">
      <div className="p-4" style={{ backgroundColor: color }} />
      <p className="font-bold">{name}</p>
      <p>{color}</p>
    </div>
  </div>
)
export default ColorPalette
