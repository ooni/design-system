import React from 'react'
import { render } from 'react-dom'
import App from './App'

const DEV = process.env.NODE_ENV !== 'production'
const props = {
  options: {
    isDev: DEV,
    basename: null
  }
}
render(<App {...props} />, app)
