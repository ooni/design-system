import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box } from 'rebass/styled-components'

import Input from '../atoms/Input'
import IconButton from '../atoms/IconButton'

export const InputWithIconButton = (props) => {
  return (
    <Flex alignItems='top'>
      <Box width={9/10} mt={2}><Input {...props} /></Box>
      <Box width={1/10}>
        <IconButton pl={3} pr={3}
          onClick={props.onAction}
          icon={props.icon} />
      </Box>
    </Flex>
  )
}

InputWithIconButton.propTypes = {
  type: PropTypes.string,
  error: PropTypes.node,
  icon: PropTypes.node,
  onAction: PropTypes.func,
  fontSize: PropTypes.number
}

InputWithIconButton.defaultProps = {
  type: 'text',
  error: null,
  fontSize: 1
}

export default InputWithIconButton
