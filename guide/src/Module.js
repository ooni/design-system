import React from 'react'
import { createView } from 'rrx'
import {
  Flex,
  Box,
  Heading
} from 'rebass'

import PageTitle from './PageTitle'
import Markdown from './Markdown'

const Module = props => {
  const { name } = props.params
  const { components } = props
  return (
    <div>
      <PageTitle>
        {name}
      </PageTitle>
      <Heading>Web</Heading>
      <Markdown children={components[name].web} />
      <Heading>Mobile</Heading>
      <Markdown children={components[name].mobile} />
    </div>
  )
}

export default createView(Module)
