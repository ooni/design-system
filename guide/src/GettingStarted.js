import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../content/GettingStarted.md'
import Markdown from './Markdown'

const GettingStarted = props => (
  <div>
    <Markdown children={src} />
  </div>
)
export default createView(GettingStarted)
