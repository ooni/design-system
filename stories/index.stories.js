/* global module */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {
  Button,
  Input,
  Select,
  Card,
  Flex,
  Box,
  InputWithIconButton,
  Provider,
  Text,
  theme,
  Container,
  Border,
  Link
} from '../components'

import { BarChart, PieChart, Modal } from '../components'
import * as icons from '../components/icons'

import MdVolumeMute from 'react-icons/lib/md/volume-mute'

storiesOf('Components/Atoms/Button', module)
  .add('Default', () => <Button>Run OONI</Button>)
  .add('Inverted', () => <Button inverted>Run OONI</Button>)
  .add('Hollow', () => <Button hollow>Run OONI</Button>)
  .add('With border', () => <Button hollow border={6}>Run OONI</Button>)
  .add('Disabled', () =>
    <div>
      <Button disabled>Disabled Button</Button>
      <Button disabled hollow>Disabled Hollow</Button>
      <Button disabled inverted>Disabled Inverted</Button>
    </div>
  )

storiesOf('Components/Atoms/Text', module)
  .add('Default', () => <Text >The quick brown fox jumps over the lazy dog</Text>)
  .add('Font Weight', () => <Text fontWeight={800} >The quick brown fox jumps over the lazy dog</Text>)
  .add('Font Size', () => <Text fontSize={30} >The quick brown fox jumps over the lazy dog</Text>)
  .add('Text Align', () => <Text textAlign={'right'} >The quick brown fox jumps over the lazy dog</Text>)

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

storiesOf('Components/Molecules/Card', module)
  .add('Default', () => <Card />)
  .add('Many cards', () => <Flex flexWrap="wrap">
    <Box width={1 / 3}>
      <Card />
    </Box>
    <Box width={1 / 3}>
      <Card />
    </Box>
    <Box width={1 / 3}>
      <Card />
    </Box>
    <Box width={1 / 3}>
      <Card />
    </Box>
  </Flex>
  )

storiesOf('Components/Charts/BarChart', module)
  .add('Default', () =>
    <div style={{ height: '500px' }}>
      <BarChart
        title='Example BarChart'
        subtitle='Spam'
        data={[
          { x: 5, y: 80 },
          { x: 10, y: 100 },
          { x: 15, y: 90 },
          { x: 20, y: 150 },
          { x: 25, y: 88 }
        ]}
      />
    </div>
  )

storiesOf('Components/Charts/PieChart', module)
  .add('Default', () =>
    <div style={{ height: '500px' }}>
      <PieChart
        title='Example PieChart'
        subtitle='Spam'
        data={[
          { x: 'News', y: 111 },
          { x: 'Circumvention', y: 43 },
          { x: 'Human Rights', y: 11 },
          { x: 'Political', y: 9 },
          { x: 'Other', y: 4 }
        ]}
      />
    </div>
  )

storiesOf('Components/Icons', module)
  .add('Default', () =>
    <Flex flexWrap='wrap'>
      {Object.keys(icons).map((k, i) => {
        const Icon = icons[k]
        return (
          <Box key={i} width={1/5} pb={3}>
            <Icon size={50} />
            <Text>{k}</Text>
          </Box>
        )
      })}
      <Box width={1/5} pb={3}>
        <MdVolumeMute size={50} />
      </Box>
    </Flex>
  )

storiesOf('Components/Molecules/InputWithIconButton', module)
  .add('Default', () =>
    <InputWithIconButton />
  )
  .add('Type Password', () =>
    <InputWithIconButton type='password' />
  )
  .add('With Icon', () =>
    <InputWithIconButton icon={<MdVolumeMute />} />
  )
  .add('With Clickable Icon', () =>
    <InputWithIconButton
      icon={<MdVolumeMute />}
      onAction={action('Clicked')}
      onChange={action('Changed')}
    />
  )

storiesOf('Components/Organisms/Modal', module)
  .add('Default', () =>
    <Modal show={true}>
      <div>Modal Content</div>
    </Modal>
  )
  .add('With clickable Close Button', () =>
    <Modal show={true} closeButton='right' onHideClick={action('clicked')}>
      <Box p={3} bg='lightblue'>
        Modal Content
      </Box>
    </Modal>
  )

storiesOf('Layouts', module)
  .add('Default', () =>
    <Provider theme={theme}>
      <Box bg={theme.colors.blue5}>
        <Container bg={theme.colors.blue1}>
          <Box> Container </Box>
        </Container>
      </Box>
    </Provider>
  )
