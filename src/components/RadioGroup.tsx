import React, { ChangeEvent, Children, ReactNode, cloneElement } from 'react'
import { twMerge } from 'tailwind-merge'

export interface RadioGroupProps {
  children?: ReactNode
  name?: string
  value?: string
  flexDirection?: 'row' | 'column'
  className?: string
  onChange: (arg: string) => void
}

const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  className,
  flexDirection = 'column',
  ...props
}: RadioGroupProps) => {
  const iterateOverChildren = (children: ReactNode) => {
    return Children.map(children, (child: ReactNode): ReactNode => {
      if (!React.isValidElement(child)) return null

      return cloneElement(child, {
        ...child.props,
        checked: child.props.value === value,
        onChange: (e: ChangeEvent<HTMLFormElement>) =>
          onChange?.(e.target.value),
        children: iterateOverChildren(child.props.children),
      })
    })
  }

  return (
    <div
      className={twMerge('flex', className)}
      style={{ flexDirection }}
      {...props}
    >
      {iterateOverChildren(children)}
    </div>
  )
}

export default RadioGroup
