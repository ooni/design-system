import { Meta } from '@storybook/react'
import React from 'react'
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import HeroLead from '../components/HeroLead'
import LogoOONIRun from '../components/LogoOONIRun'
import Text from '../components/Text'

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
