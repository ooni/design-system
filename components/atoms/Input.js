import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass/styled-components'
import { Input as RebassInput, Textarea as RebassTextarea } from '@rebass/forms/styled-components'
import MdWarning from 'react-icons/lib/md/warning'

import styled, { css } from 'styled-components'

import Text from './Text'
import { space, fontSize, color, width } from '../util'

const StyledErrorMessage = styled.p`
  ${fontSize}

  color: ${props => props.theme.colors.red7}
`

StyledErrorMessage.defaultProps = {
  fontSize: 1
}

const ErrorMessage = ({ children }) => {
  return (
    <Flex flexWrap='wrap' color='red7' mt={3}>
      <Box>
        <Text>{children}</Text>
      </Box>
      <Box ml='auto' width={16} flex='none'>
        <Text><MdWarning /></Text>
      </Box>
    </Flex>
  )
}

ErrorMessage.propTypes = {
  children: PropTypes.any
}


const StyledInput = props => <RebassInput
  {...props}
  sx={{
    fontFamily: 'inherit',
    display: 'block',
    verticalAlign: 'middle',
    bg: 'transparent',
    border: 'none',
    borderRadius: 0,
    height: '32px',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: props.error ? 'red7' : 'gray1',
    outline: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
    boxShadow: 'none',
    'box-sizing': 'content-box',
    transition: 'all .3s',
    ':hover': {
      borderBottomColor: props.error === true ? 'red7' : 'gray3'
    },
    ':focus': {
      borderBottomColor: props.error === true ? 'red7' : 'base'
    }
  }}
/>

const StyledTextarea = styled(RebassTextarea)``

const Input = (props) => {
  let StyledElement = StyledInput
  if (props.type === 'textarea') {
    StyledElement = StyledTextarea
  }
  return (
    <div>
      <StyledElement {...props} />
      {props.error && <ErrorMessage>{props.error}</ErrorMessage>}
    </div>
  )
}


Input.propTypes = {
  type: PropTypes.string,
  error: PropTypes.node,
  fontSize: PropTypes.number,
  rows: PropTypes.number
}

Input.defaultProps = {
  type: 'text',
  error: null,
  fontSize: 1,
  rows: 3,
  onChange: () => {}
}

export default Input
