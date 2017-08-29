import React from 'react'
import styled from 'styled-components'

import { createProvider } from 'refunk'
import { createRouter, Link } from 'rrx'

import {
  Provider,
  Sticky,
  Container,
  Flex,
  Box,
  Border,
} from 'rebass'

import Home from './Home'
import Colors from './Colors'
import Typography from './Typography'
import Logo from './Logo'
import SideNav from './SideNav'

import { rebassTheme } from 'ooni-components'

const StickySide = styled(Box)`
  @media screen and (min-width: 32em) {
    flex: none;
    order: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    bottom: 0;
    height: 100vh;
    overflow: auto;
  }
`

const App = props => {
  const { pathname } = props.location
  return (
    <Provider theme={rebassTheme}>
      <Flex wrap>
        <Box
          flex='0 1 auto'
          order={[ null, 2 ]}
          w={[ 1, 'calc(100% - 192px)' ]}>
          <Container
            mt={6}
            px={[ 3, 3, 4 ]}
            pb={3}
            maxWidth={1024}>
            <Home pattern='/' />
            <Colors pattern='/colors' />
            <Typography pattern='/typography' />
            <Logo pattern='/logo' />
          </Container>
        </Box>
				<StickySide w={[ 1, 192 ]}>
					<Border right>
						<SideNav {...props} />
					</Border>
				</StickySide>

      </Flex>
    </Provider>
  )
}

const state = {
  xray: false,
  overlay: false,
  drawer: false,
  checked: false,
  fixed: false,
}

export default createProvider(state)(createRouter(App))
