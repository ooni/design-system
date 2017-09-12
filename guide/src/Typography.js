import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../content/Typography.md'
import Markdown from './Markdown'

const Typography = props => (
  <div>
    <Markdown children={src} />
  </div>
)
export default createView(Typography)
