import React from 'react'
import { addDecorator, Meta } from '@storybook/react'
import { Box, Flex } from 'rebass/styled-components'
import {
  CategoryCodeALDR,
  CategoryCodeANON,
  CategoryCodeCOMM,
  CategoryCodeCOMT,
  CategoryCodeCULTR,
  CategoryCodeDATE,
  CategoryCodeECON,
  CategoryCodeENV,
  CategoryCodeFILE,
  CategoryCodeGAME,
  CategoryCodeGMB,
  CategoryCodeGOVT,
  CategoryCodeGRP,
  CategoryCodeHACK,
  CategoryCodeHATE,
  CategoryCodeHOST,
  CategoryCodeHUMR,
  CategoryCodeIGO,
  CategoryCodeLGBT,
  CategoryCodeMILX,
  CategoryCodeMISC,
  CategoryCodeMMED,
  CategoryCodeNEWS,
  CategoryCodePOLR,
  CategoryCodePORN,
  CategoryCodePROV,
  CategoryCodePUBH,
  CategoryCodeREL,
  CategoryCodeSRCH,
  CategoryCodeXED,
  Cross,
  NettestFacebookMessenger,
  NettestGroupCircumvention,
  NettestGroupExperimental,
  NettestGroupInstantMessaging,
  NettestGroupMiddleBoxes,
  NettestGroupPerformance,
  NettestGroupWebsites,
  NettestPsiphon,
  NettestRiseupVPN,
  NettestSignal,
  NettestTelegram,
  NettestTor,
  NettestVanillaTor,
  NettestWhatsApp,
  Tick,
} from '../components/icons'
import ThemeDecorator from './ThemeDecorator'
import Text from '../components/Text'

const meta: Meta = {
  title: 'OONIIcons',
}

addDecorator(ThemeDecorator)

export default meta

export const Default = () => {
  const icons = [
    CategoryCodeALDR,
    CategoryCodeANON,
    CategoryCodeCOMM,
    CategoryCodeCOMT,
    CategoryCodeCULTR,
    CategoryCodeDATE,
    CategoryCodeECON,
    CategoryCodeENV,
    CategoryCodeFILE,
    CategoryCodeGAME,
    CategoryCodeGMB,
    CategoryCodeGOVT,
    CategoryCodeGRP,
    CategoryCodeHACK,
    CategoryCodeHATE,
    CategoryCodeHOST,
    CategoryCodeHUMR,
    CategoryCodeIGO,
    CategoryCodeLGBT,
    CategoryCodeMILX,
    CategoryCodeMISC,
    CategoryCodeMMED,
    CategoryCodeNEWS,
    CategoryCodePOLR,
    CategoryCodePORN,
    CategoryCodePROV,
    CategoryCodePUBH,
    CategoryCodeREL,
    CategoryCodeSRCH,
    CategoryCodeXED,
    Cross,
    NettestFacebookMessenger,
    NettestGroupCircumvention,
    NettestGroupExperimental,
    NettestGroupInstantMessaging,
    NettestGroupMiddleBoxes,
    NettestGroupPerformance,
    NettestGroupWebsites,
    NettestPsiphon,
    NettestRiseupVPN,
    NettestSignal,
    NettestTelegram,
    NettestTor,
    NettestVanillaTor,
    NettestWhatsApp,
    Tick,
  ]

  return (
    <Flex flexWrap="wrap">
      {Object.keys(icons).map((k, i) => {
        const Icon = icons[i]
        return (
          <Box key={i} width={1 / 5} pb={3}>
            <Icon width={24} />
            <Text>{icons[i]}</Text>
          </Box>
        )
      })}
    </Flex>
  )
}
