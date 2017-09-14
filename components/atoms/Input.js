import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'

import MdWarning from 'react-icons/lib/md/warning'

import { space, width, fontSize, color } from 'styled-system'
import styled, { css } from 'styled-components'

const borderBottomMaybeError = (color, baseHeight) => (props) => {
  if (props.error) {
    return `2px solid ${props.theme.colors.red7};`
  }
  return `${baseHeight} solid ${props.theme.colors[color]};`
}


const styles = css`
  $space;
  $width;
  $fontSize;
  $color;

  font-family: inherit;
  font-size: 1rem;
  display: 'block';
  vertical-align: 'middle';

  background-color: transparent;

  border: none;
  border-bottom: ${borderBottomMaybeError('gray1', '1px')}
  border-radius: 0;
  margin: 0;
  padding: 0;

  outline: none;
  width: 100%;
  height: 2rem;

  box-shadow: none;
  box-sizing: content-box;
  transition: all .3s;

  &:focus:not([readonly]) {
    border-bottom: ${borderBottomMaybeError('base', '2px')}
    box-shadow: 0 1px 0 0 ${props => props.theme.colors.gray1};
  }
`

const StyledErrorMessage = styled.p`
  color: ${props => props.theme.colors.red7}
`

const ErrorMessage = ({children}) => {
  return (
    <Flex wrap>
      <Box>
        <StyledErrorMessage>{children}</StyledErrorMessage>
      </Box>
      <Box ml='auto' width={16} flex='none'>
        <StyledErrorMessage><MdWarning /></StyledErrorMessage>
      </Box>
    </Flex>
  )
}

ErrorMessage.propTypes = {
  children: PropTypes.any
}

const StyledInput = styled.input`${styles}`
const StyledTextarea = styled.textarea`${styles}`

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
  error: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  error: null
}

export default Input
