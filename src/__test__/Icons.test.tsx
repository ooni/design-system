import { render, screen } from '@testing-library/react'
import React from 'react'

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

describe('Icons', () => {
  test('render all icons', () => {
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

    render(
      <div>
        {Object.keys(icons).map((k, i) => {
          const Icon = icons[i]
          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div className="flex w-1/5 pb-4" key={i} data-testid={`icon-${i}`}>
              <Icon size={50} />
            </div>
          )
        })}
      </div>,
    )

    for (let i = 0; i < Object.keys(icons).length; i += 1) {
      const iconElement = screen.getByTestId(`icon-${i}`)
      expect(iconElement).toBeInTheDocument()
    }
  })
})
