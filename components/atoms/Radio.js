import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Radio, Label } from '@rebass/forms/styled-components'
import { Flex } from 'rebass/styled-components'


export const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  direction = 'column',
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(value)

  const onChangeCallback = useCallback((event) => {
    setCurrentValue(event.target.value)
    onChange(event.target.value)
  }, [value])

  return (
    <Flex flexDirection={direction} {...props}>
      {React.Children.map(children, child => (
        !(child.type.name === RadioButton.name)
          ? child
          : React.cloneElement(child, {
            name: name,
            checked: child.props.value === currentValue,
            onChange: onChangeCallback,
          })
      ))}
    </Flex>
  )
}

RadioGroup.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column'])
}

export const RadioButton = ({
  label,
  ...props
}) => {
  return (
    <Label htmlFor={props.id} alignItems='center'>
      <Radio {...props} />
      {label}
    </Label>
  )
}

RadioButton.propTypes = {
  label: PropTypes.any,
  id: PropTypes.string
}
