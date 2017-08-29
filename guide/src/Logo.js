import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../content/Logo.md'
import Markdown from './Markdown'

const Logo = props => (
  <div>
    <Markdown children={src} />
  </div>
)
export default createView(Logo)
