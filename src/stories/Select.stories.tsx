import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Box } from 'rebass/styled-components'
import { Label, Select } from '@rebass/forms'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'Select',
  component: Select,
}

addDecorator(ThemeDecorator)

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
      <Label htmlFor="country">Country</Label>
      <Select
        id="country"
        name="country"
        defaultValue="Australia"
        onChange={action('selected')}
      >
        {Object.entries(countries).map(([key, country]) => (
          <option key={key}>{country.name}</option>
        ))}
      </Select>
    </Box>
  )
}
