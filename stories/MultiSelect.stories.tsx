import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react'
import React from 'react'

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
    <div>
      <MultiSelect
        name="country"
        label="Country"
        options={countries}
        // onChange={() => action('selected')}
      />
    </div>
  )
}
