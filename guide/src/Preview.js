import React from 'react'
import styled from 'styled-components'
import {
  LiveProvider,
  LivePreview
} from 'react-live'
import Rebass, { Flex } from 'rebass'

import OONIComponents from 'ooni-components'
import GuideComponents from './components'

const update = () => {}
const toggle = () => {}
const checked = true
const scope = Object.assign({}, OONIComponents, Rebass, GuideComponents, Rebass, {
  checked,
  update,
  toggle,
  styled
})

const Preview = props => {
  return (
    <LiveProvider
      {...props}
      scope={scope}
      mountStylesheet={false}>
      <Flex
        style={{ height: 192 }}
        align='center'
        justify='center'>
        <LivePreview />
      </Flex>
    </LiveProvider>
  )
}
export default Preview
