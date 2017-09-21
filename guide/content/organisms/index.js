import BarChart from './BarChart'
import Hero from './Hero'
import Modal from './Modal'
import description from 'raw-loader!./Description.md'

export const organisms = {
  BarChart,
  Hero,
  Modal
}

export const organismDescription = description
export const organismList = Object.keys(organisms).sort()
export default organisms
