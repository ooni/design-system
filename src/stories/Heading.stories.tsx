import React from 'react'
import { addDecorator, Meta, Story } from '@storybook/react'
import Heading, { IHeading } from '../components/Heading'
import ThemeDecorator from './ThemeDecorator'
import colors from '../theme/colors'

const meta: Meta = {
  title: 'Heading',
  component: Heading,
}

addDecorator(ThemeDecorator)

export default meta

export const Default = () => {
  return (
    <>
      <Heading h={1}>Heading 1</Heading>
      <Heading h={2}>Heading 2</Heading>
      <Heading h={3}>Heading 3</Heading>
      <Heading h={4}>Heading 4</Heading>
      <Heading h={5}>Heading 5</Heading>
    </>
  )
}

const Template: Story<IHeading> = (args) => (
  <Heading {...args}>Test Heading</Heading>
)

export const HeadingAllProps = Template.bind({})

HeadingAllProps.args = {
  h: 1,
  color: colors.palette.lime5,
  mx: 10,
  my: 10,
  px: 2,
  py: 2,
  fontWeight: 'bold',
}
