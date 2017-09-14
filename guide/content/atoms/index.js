import Button from './Button'
import Input from './Input'
import description from 'raw-loader!./Description.md'

export const atoms = {
  Button,
  Input
}

export const atomDescription = description
export const atomList = Object.keys(atoms).sort()
export default atoms
