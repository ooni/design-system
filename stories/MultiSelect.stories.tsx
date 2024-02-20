import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'
import React from 'react'

import Box from '../src/components/Box'
import MultiSelect from '../src/components/MultiSelect'

const meta: Meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
}

export default meta

export const Default = () => {
  const countries = [
    {
      value: 1,
      label: 'Australia',
    },
    {
      value: 2,
      label: 'Albania',
    },
    {
      value: 3,
      label: 'Algeria',
    },
  ]

  return (
    <Box>
      <MultiSelect
        id="countries"
        name="country"
        label="Country"
        options={countries}
        onChange={action('selected')}
        my={3}
      />
    </Box>
  )
}
