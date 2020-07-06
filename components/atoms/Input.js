import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text } from 'rebass/styled-components'
import { Input as RebassInput, Textarea } from '@rebass/forms/styled-components'
import MdWarning from 'react-icons/lib/md/warning'

const ErrorMessage = ({ children }) => {
  return (
    <Flex flexWrap='wrap' mt={3}>
      <Box>
        <Text variant='error'>{children}</Text>
      </Box>
      <Box ml='auto' width={16} flex='none'>
        <Text variant='error'><MdWarning /></Text>
      </Box>
    </Flex>
  )
}

ErrorMessage.propTypes = {
  children: PropTypes.any
}

const Input = (props) => {
  let StyledElement = RebassInput
  if (props.type === 'textarea') {
    StyledElement = Textarea
  }

  return (
    <div>
      <StyledElement {...props} variant={props.error ? 'error' : 'forms.input'} />
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
