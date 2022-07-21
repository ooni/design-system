import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import { Box, BoxProps, Flex } from 'rebass/styled-components'
import Container from '../components/Container'
import ThemeDecorator from './ThemeDecorator'
import colors from '../theme/colors'

const meta: Meta = {
  title: 'Container',
  component: Container,
}

addDecorator(ThemeDecorator)

export default meta

const Template: Story<BoxProps> = (args) => <Container {...args} />

export const Default = Template.bind({})

Default.args = {
  bg: colors.palette.blue6,
  width: 1000,
  height: 400,
}

export const ContainerContent = () => {
  return (
    <Container bg="orange4">
      <Flex alignItems="center">
        <Box mx={5}>
          {' '}
          Page content Page content Page content Page content Page content Page
          content Page content Page content{' '}
        </Box>
        <Box mx={5}>
          {' '}
          Page content Page content Page content Page content Page content Page
          content Page content Page content{' '}
        </Box>
      </Flex>
    </Container>
  )
}
