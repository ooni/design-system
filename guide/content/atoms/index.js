import Button from './Button'
import Input from './Input'
import Radio from './Radio'
import description from 'raw-loader!./Description.md'

export const atoms = {
  Button,
  Input,
  Radio
}

export const atomDescription = description
export const atomList = Object.keys(atoms).sort()
export default atoms
