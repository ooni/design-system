import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Box from '../src/components/Box'
import TagInput from '../src/components/TagInput'

const meta: Meta = {
  title: 'Components/TagInput',
  component: TagInput,
}

export default meta

export const Default = () => {
  return (
    <Box>
      <TagInput
        id="tags"
        name="tags"
        label="Tags"
        my={3}
        value={[{ label: 'orange', value: 'orange' }]}
      />
    </Box>
  )
}
