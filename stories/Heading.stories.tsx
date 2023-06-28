import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Heading from '../src/components/Heading'
import colors from '../src/theme/colors'

const meta: Meta = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <Heading h={1}>Heading 1</Heading>
      <Heading h={2}>Heading 2</Heading>
      <Heading h={3}>Heading 3</Heading>
      <Heading h={4}>Heading 4</Heading>
      <Heading h={5}>Heading 5</Heading>
    </>
  ),
}

const HeadingAllProps: Story = {
  render: (args) => <Heading {...args}>Test Heading</Heading>,
}

HeadingAllProps.args = {
  h: 1,
  color: colors.palette.lime5,
  mx: 10,
  my: 10,
  px: 2,
  py: 2,
  fontWeight: 'bold',
}
