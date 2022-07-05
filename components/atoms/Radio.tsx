import React, {
  useState,
  useCallback,
  ChangeEvent,
  ReactNode,
  FC,
  Children,
  cloneElement,
  ReactElement,
} from 'react'
import { Radio, Label, RadioProps } from '@rebass/forms/styled-components'
import { Flex, FlexProps } from 'rebass/styled-components'

interface IRadioGroup {
  children: ReactNode
  name: string
  value: string
  direction: 'row' | 'column'
  onChange: () => void
}

export const RadioGroup: FC<IRadioGroup & FlexProps> = props => {
  const { children, name, value, direction, onChange, ...rest } = props

  const [currentValue, setCurrentValue] = useState(value)

  const onChangeCallback = useCallback(
    (event: ChangeEvent<any>) => {
      setCurrentValue(event.target.value)
      onChange(event.target.value)
    },
    [value]
  )

  return (
    <Flex flexDirection={direction} {...rest}>
      {Children.map(children, child => {
        const childElement = child as ReactElement

        if (childElement.type === 'radio') {
          return child
        }

        return cloneElement(childElement, {
          name,
          checked: childElement.props.value === currentValue,
          onChange: onChangeCallback,
        })
      })}
    </Flex>
  )
}

RadioGroup.defaultProps = {
  direction: 'column',
}

interface IRadioButton {
  id: string
  label: string
}

export const RadioButton: FC<IRadioButton & RadioProps> = props => {
  const { id, label, ...rest } = props

  return (
    <Label htmlFor={id} alignItems="center">
      <Radio {...rest} />
      {label}
    </Label>
  )
}
