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
import { Flex, FlexProps } from 'rebass/styled-components'

export interface IRadioGroup extends FlexProps {
  children?: ReactNode
  name?: string
  value?: string
  direction?: 'row' | 'column'
}

const RadioGroup: FC<IRadioGroup> = (props) => {
  const { children, name, value, direction, onChange, ...rest } = props

  const [currentValue, setCurrentValue] = useState(value)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value)
  }

  return (
    <Flex flexDirection={direction} {...rest} onChange={handleChange}>
      {Children.map(children, (child) => {
        const childElement = child as ReactElement

        if (childElement.props.name === name) {
          return child
        }

        return cloneElement(childElement, {
          name,
          checked: childElement.props.value === currentValue,
        })
      })}
    </Flex>
  )
}

RadioGroup.defaultProps = {
  direction: 'column',
}

export default RadioGroup
