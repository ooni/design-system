import React from 'react'
import PropTypes from 'prop-types'

import { Flex, Box } from 'grid-styled'

import MdWarning from 'react-icons/lib/md/warning'

import { space, width, fontSize, color } from 'styled-system'
import styled, { css } from 'styled-components'

const StyledErrorMessage = styled.p`
  color: ${props => props.theme.colors.red7}
`

export class RadioGroup extends React.Component {

  handleChange(value, event) {
    if (this.props.onChange) this.props.onChange(value, event)
  }

  render() {
    const { children, value } = this.props
    return (
      <div>
        {React.Children.map(children, child => (
          !(child.type === RadioButton)
            ? child
            : React.cloneElement(child, {
              checked: child.props.value === value,
              onChange: this.handleChange.bind(this, child.props.value)
            })
        ))}
      </div>
    )
  }
}

RadioGroup.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
  fontSize: PropTypes.number
}

RadioGroup.defaultProps = {
  fontSize: 4
}

const StyledLabel = styled.label`
`

const ErasedInputRadio = styled.input`
  appearance: none;
  border: 0;
  height: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  width: 0;
`
const StyledRadioButton = styled.div`
  padding-bottom: 10px;
`

const StyledRadio = styled.div`
  border: 2px solid ${ props => props.theme.colors.base };
  background-color: ${ props => props.checked ? props.theme.colors.base : 'transparent' };
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 20px;
  margin: 0 5px;
  position: relative;
  vertical-align: top;
  width: 20px;
`

const StyledRadioChecked = StyledRadio.extend`
  background-color: ${props => props.theme.colors.base};
`

export class RadioButton extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const { checked, disabled, onChange } = this.props
    if (event.pageX !== 0 && event.pageY !== 0) this.blur()
    if (!disabled && !checked && onChange) onChange(event, this)
  }

  blur() {
    if (this.inputNode) {
      this.inputNode.blur();
    }
  }

  focus() {
    if (this.inputNode) {
      this.inputNode.focus();
    }
  }


  render() {
    const { checked, label } = this.props
    return (
      <StyledRadioButton>
        <StyledLabel>
          <ErasedInputRadio
            onClick={this.handleClick}
            onChange={()  => {}}
            innerRef={c => {this.inputNode = c}}
            type='radio' />
          <StyledRadio checked={checked} />
          {label}
        </StyledLabel>
      </StyledRadioButton>
    )
  }
}

RadioButton.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  fontSize: PropTypes.number,
  checked: PropTypes.bool
}

RadioGroup.defaultProps = {
  fontSize: 4
}
