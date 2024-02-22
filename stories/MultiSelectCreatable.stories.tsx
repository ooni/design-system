import { Meta } from '@storybook/react'
import React from 'react'

import MultiSelectCreatable from '../src/components/MultiSelectCreatable'

const meta: Meta = {
  title: 'Components/MultiSelectCreatable',
  component: MultiSelectCreatable,
}

export default meta

export const Default = () => {
  return (
    <div>
      <MultiSelectCreatable
        name="tags"
        label="Tags"
        value={[{ label: 'orange', value: 'orange' }]}
        onChange={(val) => console.log(val)}
      />
    </div>
  )
}
