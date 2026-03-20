import React, { ChangeEvent, Children, ReactNode, cloneElement } from 'react'
import { twMerge } from 'tailwind-merge'

type RadioGroupProps = React.InputHTMLAttributes<HTMLInputElement> & {
  flexDirection?: 'row' | 'column'
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

      const childProps = child.props as Record<string, unknown>
      return cloneElement(child, {
        ...childProps,
        checked: childProps.value === value,
        onChange: (e: ChangeEvent<HTMLInputElement>) => onChange?.(e),
        children: iterateOverChildren((childProps.children as ReactNode) ?? undefined),
      } as Record<string, unknown>)
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
