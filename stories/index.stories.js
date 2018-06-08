import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Input, Select } from '../components'

storiesOf('Components/Atoms/Button', module)
  .add('Default', () => <Button>Run OONI</Button>)
  .add('Inverted', () => <Button inverted>Run OONI</Button>)
  .add('Hollow', () => <Button hollow>Run OONI</Button>)
  .add('With border', () => <Button hollow border={6}>Run OONI</Button>)

storiesOf('Components/Atoms/Input', module)
  .add('Default', () => <Input />)
  .add('With Error', () => <Input error="Error message" />)
  .add('Font Size', () => <Input fontSize={30} />)
  .add('Text Area', () => <Input type='textarea' rows={10} />)

storiesOf('Components/Atoms/Select', module)
  .add('default', () =>
    <div>
      <label>
        <div> Choose An Option </div>
        <Select>
          <option value="1">One</option>
          <option value="2">Two</option>
        </Select>
      </label>
    </div>
  )
  .add('Really long options', () => (
    <Select>
      <option value="1">Really Really Really Really Really Really Long</option>
      <option value="2">Two</option>
    </Select>
  ))
  .add('onChange', () => (
    <Select
      onChange={(e) => alert(e.target.value)}
    >
      <option value="1">One</option>
      <option value="2">Two</option>
    </Select>
  ))
