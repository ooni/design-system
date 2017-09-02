import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../content/Brand.md'
import Markdown from './Markdown'

const Brand = props => (
  <div>
    <Markdown children={src} />
  </div>
)
export default createView(Brand)
