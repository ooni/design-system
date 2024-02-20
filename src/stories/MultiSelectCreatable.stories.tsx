import { Meta } from '@storybook/react'
import React from 'react'

import Box from '../components/Box'
import MultiSelectCreatable from '../components/MultiSelectCreatable'

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
