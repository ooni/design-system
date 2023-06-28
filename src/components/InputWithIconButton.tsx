import React, { ReactNode } from 'react'
import { InputProps } from 'types'
import Box from './Box'
import Flex from './Flex'
import IconButton from './IconButton'
import Input from './Input'

interface IInputWithIconButton extends InputProps {
  onAction?: () => void
  icon?: ReactNode
}

export const InputWithIconButton = ({
  onAction,
  icon,
  ...rest
}: IInputWithIconButton) => {
  return (
    <Flex alignItems="top">
      <Box width={icon ? 9 / 10 : 1}>
        <Input {...rest} />
      </Box>
      {icon ? (
        <Box width={1 / 10}>
          <IconButton pl={3} onClick={onAction} icon={icon} />
        </Box>
      ) : null}
    </Flex>
  )
}

export default InputWithIconButton
