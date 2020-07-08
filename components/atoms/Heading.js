import React from 'react'
import Text from './Text'

export const Heading = props => {
  const headingElement = `h${props.h}` // h1 h2 h3 h4 h5
  return (
    <Text as={headingElement} {...props} variant={headingElement} />
  )
}

Heading.defaultProps = {
  h: 0
}

export default Heading
