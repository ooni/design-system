import { FlexProps } from 'types'
import React from 'react'
import { styled } from 'styled-components'
import Box from './Box'

const Flex = styled(Box)<FlexProps>({
  display: 'flex',
})

export default Flex
