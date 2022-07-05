import React, { FC } from 'react'
import { TextProps } from 'rebass/styled-components'
import Text from './Text'

interface IHeading {
  h: number
}

const Heading: FC<TextProps & IHeading> = props => {
  const { h, ...rest } = props

  const getHeadingElement = () => {
    switch (h) {
      case 1:
        return 'h1'
      case 2:
        return 'h2'
      case 3:
        return 'h3'
      case 4:
        return 'h4'
      case 5:
        return 'h5'
      default:
        return 'h3'
    }
  }

  return (
    <Text as={getHeadingElement()} {...rest} variant={getHeadingElement()} />
  )
}

Heading.defaultProps = {
  h: 1,
}

export default Heading
