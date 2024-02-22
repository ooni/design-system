import { Meta } from '@storybook/react'
import React from 'react'
import * as OONIIcons from '../src/components/icons'

type IconType = keyof typeof OONIIcons

const meta: Meta = {
  title: 'OONIIcons',
}

export default meta

export const Default = {
  render: () => (
    <div className="flex flex-wrap">
      {Object.keys(OONIIcons).map((k) => {
        const Icon = OONIIcons[k as IconType]
        return (
          <div className="w-1/5 pb-4" key={k}>
            <Icon size={50} />
            <p>{k}</p>
          </div>
        )
      })}
    </div>
  ),
}
