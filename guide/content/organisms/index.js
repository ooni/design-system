import BarChart from './BarChart'
import description from 'raw-loader!./Description.md'

export const organisms = {
  BarChart
}

export const organismDescription = description
export const organismList = Object.keys(organisms).sort()
export default organisms
