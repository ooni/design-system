import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSelectContainer = styled.div`
`

const StyledSelect = styled.select`
  font-size: 16px;
  padding: 10px 40px 10px 15px;
  border-radius: 2em;
  cursor: pointer;
  background-color: ${props => props.theme.colors.gray1};
  border: none;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAh0lEQVQ4T93TMQrCUAzG8V9x8QziiYSuXdzFC7h4AcELOPQAdXYovZCHEATlgQV5GFTe1ozJlz/kS1IpjKqw3wQBVyy++JI0y1GTe7DCBbMAckeNIQKk/BanALBB+16LtnDELoMcsM/BESDlz2heDR3WePwKSLo5eoxz3z6NNcFD+vu3ij14Aqz/DxGbKB7CAAAAAElFTkSuQmCC');
  background-repeat: no-repeat;
  background-position: right 10px center;
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
      </StyledSelectContainer>
    )
  }
}

Select.propTypes = {
  children: PropTypes.node
}
