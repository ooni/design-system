import FormWithLabel from './FormWithLabel'
import InputWithIconButton from './InputWithIconButton'
import Card from './Card'
import description from 'raw-loader!./Description.md'

export const molecules = {
  FormWithLabel,
  InputWithIconButton,
  Card
}

export const moleculeDescription = description
export const moleculeList = Object.keys(molecules).sort()
export default molecules
