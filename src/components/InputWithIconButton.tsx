import React, { FC, ReactNode } from 'react'
import { Flex, Box } from 'rebass/styled-components'
import { Input, InputProps } from '@rebass/forms/styled-components'
import IconButton from './IconButton'

interface IInputWithIconButton extends InputProps {
  onAction?: () => void
  icon?: ReactNode
  type?: string
  error?: ReactNode
  fontSize?: number
}

export const InputWithIconButton: FC<IInputWithIconButton> = (props) => {
  const { onAction, icon, ...rest } = props

  return (
    <Flex alignItems="top">
      <Box width={icon ? 9 / 10 : 1} mt={2}>
        <Input {...rest} />
      </Box>
      {icon ? (
        <Box width={1 / 10}>
          <IconButton pl={3} pr={3} onClick={onAction} icon={icon} />
        </Box>
      ) : null}
    </Flex>
  )
}

InputWithIconButton.defaultProps = {
  type: 'text',
  error: null,
  fontSize: 1,
  onAction: undefined,
  icon: undefined,
}

export default InputWithIconButton
