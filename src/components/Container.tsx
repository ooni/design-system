import React from 'react'
import { BoxProps } from 'types'
import Box from './Box'

const Container = (props: BoxProps) => <Box {...props} variant="container" />

export default Container
