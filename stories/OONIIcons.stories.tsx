import React from 'react'
import { Meta } from '@storybook/react'
import Box from '../src/components/Box'
import Flex from '../src/components/Flex'
import * as OONIIcons from '../src/components/icons'
import Text from '../src/components/Text'

const meta: Meta = {
  title: 'OONIIcons',
}

export default meta

export const Default = {
  render: () => (
    <Flex flexWrap="wrap">
      {Object.keys(OONIIcons).map((k) => {
        const Icon = OONIIcons[k]
        return (
          <Box key={k} width={1 / 5} pb={3}>
            <Icon size={50} />
            <Text>{k}</Text>
          </Box>
        )
      })}
    </Flex>
  ),
}
