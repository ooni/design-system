import React from 'react'
import { TextProps } from 'types'
import Text from './Text'

export interface IHeading extends TextProps {
  h?: number
}

const Heading = ({ h = 1, ...rest }: IHeading) => {
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

export default Heading
