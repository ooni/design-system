import React from 'react'
import styled from 'styled-components'
import {
  Flex,
  Box,
  Subhead,
  Divider,
  NavLink
} from 'rebass'
import { Link as RLink } from 'rrx'

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
          href='/colors'
          children='Colors'
          active={pathname === '/colors'}
        />
        <Link
          href='/typography'
          children='Typography'
          active={pathname === '/typography'}
        />
        <Link
          href='/logo'
          children='Logo'
          active={pathname === '/logo'}
        />
      </Flex>
    </nav>
  )
}

export default SideNav
