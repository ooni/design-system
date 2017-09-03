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
    let shownSection = section
    if (component.mobile === undefined && component.web === undefined) {
      throw Error('Either mobile or web component must be defined')
    }
    if (component.mobile === undefined && shownSection == 'mobile') {
      shownSection = 'web'
    }
    if (component.web === undefined && shownSection == 'web') {
      shownSection = 'mobile'
    }

    let markdown = <Markdown children={component.web} />
    if (shownSection === 'mobile') {
      markdown = <Markdown children={component.mobile} />
    }
    return (
      <div>
      <Tabs>
        {component.web !== undefined && <TabItem
          active={shownSection === 'web'}
          onClick={e => props.update(setSection('web'))}>
        Web
        </TabItem>}
        {component.mobile !== undefined && <TabItem
          active={shownSection === 'mobile'}
          onClick={e => props.update(setSection('mobile'))}>
        Mobile
        </TabItem>}
      </Tabs>
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
