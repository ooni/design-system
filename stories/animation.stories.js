/* global module */
import React from 'react'
import Lottie from 'react-lottie'
import { storiesOf } from '@storybook/react'

import websitesAnimData from '../components/animations/RunningWebsites.json'
import imAnimData from '../components/animations/RunningInstantMessaging.json'
import middleboxesAnimData from '../components/animations/RunningMiddleBoxes.json'
import performanceAnimData from '../components/animations/RunningPerformance.json'
import circumventionAnimData from '../components/animations/RunningCircumvention.json'

const LottieTemplate = ({ animData }) => (
  <Lottie
    width={300}
    height={300}
    options={{
      loop: true,
      autoplay: true,
      animationData: animData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }}
  />
)

storiesOf('Components/Animations', module)
  .add('Website Test Group', () =>
    <LottieTemplate animData={websitesAnimData} />
  )
  .add('IM Test Group', () =>
    <LottieTemplate animData={imAnimData} />
  )
  .add('Middleboxes Test Group', () =>
    <LottieTemplate animData={middleboxesAnimData} />
  )
  .add('Performance Test Group', () =>
    <LottieTemplate animData={performanceAnimData} />
  )
  .add('Circumvention Test Group', () =>
    <LottieTemplate animData={circumventionAnimData} />
  )
