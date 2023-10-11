import React from 'react'
import { addDecorator, Meta } from '@storybook/react'
import Hero from '../components/Hero'
import HeroLead from '../components/HeroLead'
import LogoOONIRun from '../components/LogoOONIRun'
import Heading from '../components/Heading'
import Text from '../components/Text'
import ThemeDecorator from './ThemeDecorator'

const meta: Meta = {
  title: 'Hero',
  component: Hero,
}

addDecorator(ThemeDecorator)

export default meta

export const Example = () => {
  return (
    <Hero pb={4} pt={4}>
      <LogoOONIRun />
      <HeroLead>
        <Heading h={2}>Let&apos;s fight internet censorship together!</Heading>
        <Text fontSize={[2]}>Includes Hero, HeroLead and Logo OONI Run</Text>
      </HeroLead>
    </Hero>
  )
}
