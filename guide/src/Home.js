import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../content/Home.md'
import Markdown from './Markdown'

const Home = props => (
  <div>
    <Markdown children={src} />
  </div>
)
export default createView(Home)
