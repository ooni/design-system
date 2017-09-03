import Button from './Button'
import description from 'raw-loader!./Description.md'

export const molecules = {
  Button
}

export const moleculeDescription = description
export const moleculeList = Object.keys(molecules).sort()
export default molecules
