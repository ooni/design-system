import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../content/Colors.md'
import Markdown from './Markdown'

const Colors = props => (
  <div>
    <Markdown children={src} />
  </div>
)
export default createView(Colors)
