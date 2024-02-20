import { Meta } from '@storybook/react'
import React from 'react'
import Box from '../components/Box'
import Flex from '../components/Flex'
import Text from '../components/Text'
import * as OONIIcons from '../components/icons'

type IconType = keyof typeof OONIIcons

const meta: Meta = {
  title: 'OONIIcons',
}

export default meta

export const Default = {
  render: () => (
    <Flex flexWrap="wrap">
      {Object.keys(OONIIcons).map((k) => {
        const Icon = OONIIcons[k as IconType] 
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
