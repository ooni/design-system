import React, {
  useState,
  ChangeEvent,
  ReactNode,
  FC,
  Children,
  cloneElement,
  ReactElement,
} from 'react'
import { FlexProps } from 'types'
import Flex from './Flex'

export interface IRadioGroup extends FlexProps {
  children?: ReactNode
  name?: string
  value?: string
  direction?: 'row' | 'column'
}

const RadioGroup = (props: IRadioGroup) => {
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

// export const RadioGroup = ({
//   children,
//   name,
//   value,
//   onChange,
//   direction = 'column',
//   ...props
// }) => {

//   const iterateOverChildren = (children) => {
//     return React.Children.map(children, (child) => {
//       if (!React.isValidElement(child)) return

//       return React.cloneElement(child, {
//         ...child.props,
//         checked: child.props.value === value,
//         onChange: (e) => { onChange(e.target.value) },
//         children: iterateOverChildren(child.props.children)})
//     })
//   }

//   return (
//     <Flex flexDirection={direction} {...props}>
//       {iterateOverChildren(children)}
//     </Flex>
//   )
// }

export default RadioGroup
