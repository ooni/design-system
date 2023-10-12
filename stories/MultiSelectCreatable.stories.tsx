import React from 'react'
import { Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Box from '../src/components/Box'
import MultiSelectCreatable from '../src/components/MultiSelectCreatable'

const meta: Meta = {
  title: 'Components/MultiSelectCreatable',
  component: MultiSelectCreatable,
}

export default meta

export const Default = () => {
  return (
    <Box>
      <MultiSelectCreatable
        id="tags"
        name="tags"
        label="Tags"
        my={3}
        value={[{ label: 'orange', value: 'orange' }]}
        onChange={(val) => console.log(val)}
      />
    </Box>
  )
}
