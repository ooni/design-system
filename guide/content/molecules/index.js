import FormWithLabel from './FormWithLabel'
import InputWithIconButton from './InputWithIconButton'
import description from 'raw-loader!./Description.md'

export const molecules = {
  FormWithLabel,
  InputWithIconButton
}

export const moleculeDescription = description
export const moleculeList = Object.keys(molecules).sort()
export default molecules
