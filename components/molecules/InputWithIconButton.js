import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box } from 'grid-styled'

import styled, { css } from 'styled-components'
import { space, fontSize, fontSizeMult, color, width } from '../util'

import Input from '../atoms/Input'
import IconButton from '../atoms/IconButton'

const ButtonContainer = styled.div`
  ${space}

  color: ${props => props.theme.colors.gray5};
  margin: 0 auto;
  height: 16px;
`

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
