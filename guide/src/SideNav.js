import React from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Subhead,
  Divider,
  NavLink,
  Text
} from 'rebass'
import { Link as RLink } from 'rrx'

import { atomList } from '../content/atoms'
import { moleculeList } from '../content/molecules'
import { organismList } from '../content/organisms'

const Link = styled(props => (
  <NavLink
    is={RLink}
    href={'#' + props.name}
    children={props.name}
    f={[ 0, 1 ]}
    {...props}
    w={[ 1/2, 1 ]}
    px={3}
    py={1}
  />
))([], props => ({
  color: props.active ? 'white' : 'inherit',
  backgroundColor: props.active ? props.theme.colors.blue : 'transparent',
  '&:hover': {
    backgroundColor: props.active ? props.theme.colors.blue : null,
  }
}))

const SectionTitle = props => (
  <Text px={3} py={1}>{props.name}</Text>
)

const SideNav = props => {
  const { pathname } = props.location
  return (
    <nav>
      <Flex wrap py={4}>
        <Link
          href='/'
          children='Home'
          active={pathname === '/'}
        />
        <Link
          href='/getting-started'
          children='Getting Started'
          active={pathname === '/getting-started'}
        />
        <Link
          href='/colors'
          children='Colors'
          active={pathname === '/colors'}
        />
        <Link
          href='/typography'
          children='Typography'
          active={pathname === '/typography'}
        />
        <Divider w={1} my={3} color='gray3' />
        <SectionTitle name='Atoms' />
        <Link
          href='/atoms'
          children='Overview'
          active={pathname === '/atoms'}
        />
        {/* XXX nest this */}
        {atomList.map(name => (
          <Link
            href={`/atoms/${name}`}
            children={name}
            active={pathname === `/atoms/${name}`}
          />
        ))}

        <Divider w={1} my={3} color='gray3' />
        <SectionTitle name='Molecules' />
        <Link
          href='/molecules'
          children='Overview'
          active={pathname === '/molecules'}
        />
        {/* XXX nest this */}
        {moleculeList.map(name => (
          <Link
            href={`/molecules/${name}`}
            children={name}
            active={pathname === `/molecules/${name}`}
          />
        ))}

        <Divider w={1} my={3} color='gray3' />
        <SectionTitle name='Organisms' />
        <Link
          href='/organisms'
          children='Overview'
          active={pathname === '/organisms'}
        />
        {/* XXX nest this */}
        {organismList.map(name => (
          <Link
            href={`/organisms/${name}`}
            children={name}
            active={pathname === `/organisms/${name}`}
          />
        ))}

        <Divider w={1} my={3} color='gray3' />
        <Link
          href='/brand'
          children='Brand'
          active={pathname === '/brand'}
        />
      </Flex>
    </nav>
  )
}

export default SideNav
