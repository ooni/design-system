import Button from './Button'
import description from 'raw-loader!./Description.md'

export const atoms = {
  Button
}

export const atomDescription = description
export const atomList = Object.keys(atoms).sort()
export default atoms
