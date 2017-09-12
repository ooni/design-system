import FormWithLabel from './FormWithLabel'
import description from 'raw-loader!./Description.md'

export const molecules = {
  FormWithLabel
}

export const moleculeDescription = description
export const moleculeList = Object.keys(molecules).sort()
export default molecules
