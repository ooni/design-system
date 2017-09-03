import React from 'react'
import { createView, Link } from 'rrx'
import PageTitle from './PageTitle'
import Markdown from './Markdown'
import Preview from './Preview'

import {
  Flex,
  Heading,
  BlockLink,
  Card,
  Divider,
  Pre,
  Text
} from 'rebass'


const ModuleCard = props => (
  <Card p={2}>
    <Preview
      code={props.code}
      style={{
        height: 192,
        overflow: 'hidden'
      }}
    />
    <Divider color='gray2' />
    <Pre f={0}>{props.name}</Pre>
  </Card>
)

const ModuleList = props => (
  <div>
    <PageTitle>
      {props.name}
    </PageTitle>
    <Markdown children={props.description} />
    <Flex wrap my={4} mx={-2}>
      {props.componentList.map(name => (
        <BlockLink
          is={Link}
          href={`${props.baseHref}/${name}`}
          key={name}
          px={2}
          pb={3}
          w={[ 1/2, 1/2, 1/3, 1/4 ]}>
          <ModuleCard name={name} code={props.components[name].preview} />
        </BlockLink>
      ))}

    </Flex>
  </div>
)
export default createView(ModuleList)
