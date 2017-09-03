import React from 'react'
import { connect } from 'refunk'
import { createView } from 'rrx'
import {
  Flex,
  Box,
  Heading,
  Tabs,
  TabItem
} from 'rebass'

import { setSection } from './updaters'

import PageTitle from './PageTitle'
import Markdown from './Markdown'

const map = state => ({
  section: state.section
})

const ModuleContent = connect(map)(props => {
    const { component, section } = props
    let markdown = <Markdown children={component.web} />
    if (section === 'mobile' && component.mobile !== undefined) {
      markdown = <Markdown children={component.mobile} />
    }
    return (
      <div>
      {component.mobile !== undefined && <Tabs>
        <TabItem
          active={section === 'web'}
          onClick={e => props.update(setSection('web'))}>
        Web
        </TabItem>
        <TabItem
          active={section === 'mobile'}
          onClick={e => props.update(setSection('mobile'))}>
        Mobile
        </TabItem>
      </Tabs>}
      {markdown}
      </div>
    )
})

const Module = props => {
  const { name } = props.params
  const { components } = props
  return (
    <div>
      <PageTitle>
        {name}
      </PageTitle>
      <ModuleContent component={components[name]} />
    </div>
  )
}

export default createView(Module)
