import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'grid-styled'

import MdWarning from 'react-icons/lib/md/warning'

import { space, width, fontSize, color } from 'styled-system'
import styled, { css } from 'styled-components'

import { stylesToCss, styleMult } from '../util'

const borderBottomMaybeError = (color, baseHeight) => (props) => {
  if (props.error) {
    return `2px solid ${props.theme.colors.red7};`
  }
  return `${baseHeight} solid ${props.theme.colors[color]};`
}

const styles = css`
  ${stylesToCss(space)};
  ${stylesToCss(width)};
  ${stylesToCss(fontSize)};
  ${stylesToCss(color)};

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
  height: ${styleMult(fontSize, 2)};

  box-shadow: none;
  box-sizing: content-box;
  transition: all .3s;

  &:hover:not([readonly]) {
    border-bottom: ${borderBottomMaybeError('gray3', '1px')}
  }

  &:focus:not([readonly]) {
    border-bottom: ${borderBottomMaybeError('base', '2px')}
  }
`

const StyledErrorMessage = styled.p`
  ${stylesToCss(fontSize)};
  color: ${props => props.theme.colors.red7}
`

StyledErrorMessage.defaultProps = {
  fontSize: 1
}

const ErrorMessage = ({children, fontSize}) => {
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
  children: PropTypes.any,
  fontSize: PropTypes.number
}

ErrorMessage.defaultProps = {
  fontSize: 2
}

const StyledInput = styled.input`${styles}`
const StyledTextarea = styled.textarea`
  ${styles}
  height: ${props => styleMult(fontSize, props.rows+1)(props)};
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
  fontSize: 2,
  rows: 3
}

export default Input
