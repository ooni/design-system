import React, { FC, ReactNode } from 'react'
import { Flex, Box } from 'rebass/styled-components'
import { InputProps } from '@rebass/forms/styled-components'
import IconButton from './IconButton'
import Input from './Input'

interface IInputWithIconButton extends InputProps {
  onAction?: () => void
  icon?: ReactNode
  error?: string
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
  error: undefined,
  fontSize: 1,
  onAction: undefined,
  icon: undefined,
}

export default InputWithIconButton
