import React from 'react'
import Text from './Text'

export const Heading = props => (
  <Text {...props} variant={props.h ? `h${props.h}` : 'heading'} />
)

Heading.defaultProps = {
  h: 0
}
export default Heading
