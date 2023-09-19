import React, { ChangeEvent, ReactNode, Children, cloneElement } from 'react'
import { FlexProps } from 'types'
import Flex from './Flex'

export interface IRadioGroup extends FlexProps {
  children?: ReactNode
  name?: string
  value?: string
  direction?: 'row' | 'column'
}

const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  direction = 'column',
  ...props
}: IRadioGroup) => {
  const iterateOverChildren = (children: ReactNode) => {
    return Children.map(children, (child: ReactNode): ReactNode => {
      if (!React.isValidElement(child)) return null

      return cloneElement(child, {
        ...child.props,
        checked: child.props.value === value,
        onChange: (e: ChangeEvent<HTMLFormElement>) =>
          onChange && onChange(e.target.value),
        children: iterateOverChildren(child.props.children),
      })
    })
  }

  return (
    <Flex flexDirection={direction} {...props}>
      {iterateOverChildren(children)}
    </Flex>
  )
}

export default RadioGroup
