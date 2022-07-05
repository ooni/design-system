import React, { FC, ReactNode } from 'react'
import { Flex, Box } from 'rebass/styled-components'
import IconButton from '../atoms/IconButton'
import { Input } from '@rebass/forms/styled-components'

interface IInputWithIconButton {
  onAction: () => void
  icon: ReactNode
  type: string
  error: ReactNode
  fontSize: number
}

export const InputWithIconButton: FC<IInputWithIconButton> = props => {
  const { onAction, icon, ...rest } = props

  return (
    <Flex alignItems="top">
      <Box width={9 / 10} mt={2}>
        <Input {...rest} />
      </Box>
      <Box width={1 / 10}>
        <IconButton pl={3} pr={3} onClick={onAction} icon={icon} />
      </Box>
    </Flex>
  )
}

InputWithIconButton.defaultProps = {
  type: 'text',
  error: null,
  fontSize: 1,
}

export default InputWithIconButton
