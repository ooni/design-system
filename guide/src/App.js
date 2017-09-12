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
import GettingStarted from './GettingStarted'
import Colors from './Colors'
import Typography from './Typography'
import ModuleList from './ModuleList'
import Module from './Module'
import Brand from './Brand'
import SideNav from './SideNav'

import { atoms, atomList, atomDescription } from '../content/atoms'
import { molecules, moleculeList, moleculeDescription } from '../content/molecules'
import { organisms, organismList, organismDescription } from '../content/organisms'

import fonts from './fonts'

import { theme } from 'ooni-components'

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
    <Provider theme={theme}>
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
            <GettingStarted pattern='/getting-started' />
            <Colors pattern='/colors' />
            <Typography pattern='/typography' />
            <ModuleList
              pattern='/atoms'
              baseHref='/atoms'
              name='Atoms'
              description={atomDescription}
              componentList={atomList}
              components={atoms}/>
            <Module
              pattern='/atoms/:name'
              components={atoms} />

            <ModuleList
              pattern='/molecules'
              baseHref='/molecules'
              name='Molecules'
              description={moleculeDescription}
              componentList={moleculeList}
              components={molecules}/>
            <Module
              pattern='/molecules/:name'
              components={molecules} />

            <ModuleList
              pattern='/organisms'
              baseHref='/organisms'
              name='Organisms'
              description={organismDescription}
              componentList={organismList}
              components={organisms}/>
            <Module
              pattern='/organisms/:name'
              components={organisms} />

            <Brand pattern='/brand' />
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
  liveEditor: true,
  overlay: false,
  drawer: false,
  checked: false,
  fixed: false,
  section: 'web'
}

export default createProvider(state)(createRouter(App))
