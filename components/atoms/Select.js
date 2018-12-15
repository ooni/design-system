import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Arrow = styled.span`
  pointer-events: none;
  position: absolute;
  top: 45%;
  right: 15px;
  width: 0;
  height: 0;
`

const ArrowDown = styled(Arrow)`
  /* Note under this article https://css-tricks.com/snippets/css/css-triangle */
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8.6px solid ${props => props.theme.colors.gray7};
`

const StyledSelectContainer = styled.div`
  display: inline-block;
  position: relative;
`

const StyledSelect = styled.select`
  background-color: ${props => props.theme.colors.gray2};
  border-radius: 2em;
  font-size: 16px;
  padding: 10px 40px 10px 15px;
  cursor: pointer;
  border: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`

export class Select extends React.Component {
  render() {
    const { children } = this.props
    return (
      <StyledSelectContainer>
        <StyledSelect {...this.props}>
          {children}
        </StyledSelect>
        <ArrowDown />
      </StyledSelectContainer>
    )
  }
}

Select.propTypes = {
  children: PropTypes.node
}
