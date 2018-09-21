import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box } from '@rebass/grid'

import Input from '../atoms/Input'
import IconButton from '../atoms/IconButton'

export const InputWithIconButton = (props) => {
  return (
    <div>
      <Flex>
        <Box w={9/10} mt={2}><Input {...props} /></Box>
        <Box onClick={props.onAction} w={1/10}>
          <IconButton pl={3} pr={3}
            onClick={props.onAction}
            icon={props.icon} />
        </Box>
      </Flex>
    </div>
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
