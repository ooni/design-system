import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'
import React from 'react'

import Box from '../components/Box'
import Select from '../components/Select'

const meta: Meta = {
  title: 'Components/Select',
  component: Select,
}

export default meta

export const Default = () => {
  const countries = [
    {
      id: 1,
      name: 'Australia',
    },
    {
      id: 2,
      name: 'Albania',
    },
    {
      id: 3,
      name: 'Algeria',
    },
  ]

  return (
    <Box>
      <Select
        id="country"
        name="country"
        label="Country"
        defaultValue="Australia"
        onChange={action('selected')}
        mt={3}
      >
        {Object.entries(countries).map(([key, country]) => (
          <option key={key}>{country.name}</option>
        ))}
      </Select>
    </Box>
  )
}
