import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

import MdWarning from 'react-icons/lib/md/warning'

import styled, { css } from 'styled-components'

import { space, fontSize, fontSizeMult, color, width } from '../util'

const borderBottomMaybeError = (color, baseHeight) => (props) => {
  if (props.error) {
    return `1px solid ${props.theme.colors.red7};`
  }
  return `${baseHeight} solid ${props.theme.colors[color]};`
}

const styles = css`
  ${space}
  ${width}
  ${fontSize}
  ${color}

  font-family: inherit;
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
  ${fontSizeMult('height', 2)}

  box-shadow: none;
  box-sizing: content-box;
  transition: all .3s;

  &:hover:not([readonly]) {
    border-bottom: ${borderBottomMaybeError('gray3', '1px')}
  }

  &:focus:not([readonly]) {
    border-bottom: ${borderBottomMaybeError('base', '1px')}
  }
`

const StyledErrorMessage = styled.p`
  ${fontSize}

  color: ${props => props.theme.colors.red7}
`

StyledErrorMessage.defaultProps = {
  fontSize: 1
}

const ErrorMessage = ({ children }) => {
  return (
    <Flex flexWrap='wrap'>
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
const StyledTextarea = styled.textarea`
  ${styles}
  ${props => fontSizeMult('height', props.rows+1)(props)}
`

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
