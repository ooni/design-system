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
        <Box><Input {...props} /></Box>
        <Box onClick={props.onAction}>
          <Flex column style={{height: '100%'}}>
            <ButtonContainer>
              <IconButton
                  onClick={props.onAction}
                  icon={props.icon} />
            </ButtonContainer>
          </Flex>
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
  fontSize: 2
}

export default InputWithIconButton
