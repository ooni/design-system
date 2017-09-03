import Button from './Button'
import description from 'raw-loader!./Description.md'

export const organisms = {
  Button
}

export const organismDescription = description
export const organismList = Object.keys(organisms).sort()
export default organisms
