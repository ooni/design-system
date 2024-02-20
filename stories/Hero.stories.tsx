import { Meta } from '@storybook/react'
import React from 'react'
import Heading from '../src/components/Heading'
import Hero from '../src/components/Hero'
import HeroLead from '../src/components/HeroLead'
import LogoOONIRun from '../src/components/LogoOONIRun'
import Text from '../src/components/Text'

const meta: Meta = {
  title: 'Components/Hero',
  component: Hero,
}

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
