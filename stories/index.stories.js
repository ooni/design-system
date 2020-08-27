/* global module */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {
  Input,
  Select,
  Label,
  Card,
  Flex,
  Box,
  InputWithIconButton,
  Text,
  Button,
  TwitterShareButton,
  FacebookShareButton,
  Container,
  Link,
  Heading,
  Hero,
  HeroLead,
  RadioButton,
  RadioGroup
} from '../components'

import { BarChart, PieChart, Modal } from '../components'
import * as icons from '../components/icons'

import MdVolumeMute from 'react-icons/lib/md/volume-mute'


storiesOf('Components/Atoms/Button', module)
  .add('All Buttons', () =>
    <div>
      <Button>Default</Button>
      <Button inverted>Inverted</Button>
      <Button hollow>Hollow</Button>
      <Button hollow border={6}>Hollow border</Button>
      <Button disabled>Disabled</Button>
      <Button disabled hollow>Disabled hollow</Button>
      <Button disabled hollow border={6}>Disabled hollow border</Button>
      <Button disabled inverted>Disabled inverted</Button>
    </div>
  )
  .add('Default', () => <Button>Run OONI</Button>)
  .add('Inverted', () => <Button inverted>Run OONI</Button>)
  .add('Hollow', () => <Button hollow>Run OONI</Button>)
  .add('Hollow with border', () => <Button hollow border={6}>Run OONI</Button>)
  .add('Disabled', () =>
    <div>
      <Button disabled>Disabled Button</Button>
      <Button disabled hollow>Disabled Hollow</Button>
      <Button disabled inverted>Disabled Inverted</Button>
    </div>
  )
  .add('Twitter Share Button', () => <TwitterShareButton msg='Message in Tweet' />)
  .add('Facebook Share Button', () => <FacebookShareButton msg='Messsage on Facebook' />)

storiesOf('Components/Atoms/Text', module)
  .add('Default', () => <Text >The quick brown fox jumps over the lazy dog</Text>)
  .add('Font Weight', () => <Text fontWeight={800} >The quick brown fox jumps over the lazy dog</Text>)
  .add('Font Size', () => <Text fontSize={30} >The quick brown fox jumps over the lazy dog</Text>)
  .add('Text Align', () => <Text textAlign={'right'} >The quick brown fox jumps over the lazy dog</Text>)

storiesOf('Components/Atoms/Heading', module)
  .add('Heading', () => <Heading> Just a simple Heading </Heading>)
  .add('Standard Headings', () => [1, 2, 3, 4, 5, 6].map(h => (
    <Heading h={h} key={h}> Standard Heading {h} </Heading>
  )))

storiesOf('Components/Atoms/Input', module)
  .add('Default', () => <Input />)
  .add('With Error', () => <Input error="Error message" />)
  .add('Font Size', () => <Input fontSize={30} />)
  .add('Text Area', () => <Input type='textarea' rows={10} />)
  .add('Text Area with Error', () => <Input type='textarea' rows={4} error='Error in text area' />)

storiesOf('Components/Atoms/Select', module)
  .add('default', () =>
    <Box>
      <Label for='select1'> Choose your options </Label>
      <Select>
        <option value="1">One</option>
        <option value="2">Two</option>
      </Select>
    </Box>
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

storiesOf('Components/Atoms/Link', module)
  .add('Default', () => (
    <Link href='https://ooni.org'>OONI</Link>
  ))
  .add('Custom Color', () => (
    <Link href='https://ooni.org' color='pink5'>OONI</Link>
  ))
  .add('Attributes', () => (
    <Link href='https://ooni.org' target='_blank'>OONI (new tab)</Link>
  ))

storiesOf('Components/Atoms/Radios', module)
  .add('Radio Button', () => (
    <RadioButton label='OONI' value='ooni' />
  ))
  .add('Radio Button onChange', () => (
    <RadioButton label='OONI' value='ooni' name='project' id='ooni' onChange={action('RadioButton onChange')} />
  ))
  .add('Radio Group', () => (
    <RadioGroup onChange={action('Radio Group onChange')} value='two'>
      <RadioButton name='name' label='OONI' value='one' />
      <RadioButton name='name' label='Ooni' value='two' />
      <RadioButton name='name' label='ooni' value='three' />
      <RadioButton name='name' label='O.O.N.I' value='four' />
    </RadioGroup>
  ))
  .add('Radio Group Horizontal', () => (
    <RadioGroup direction='row' onChange={action('Radio Group onChange')} value='three'>
      <RadioButton name='name' label='OONI' value='one' />
      <RadioButton name='name' label='Ooni' value='two' />
      <RadioButton name='name' label='ooni' value='three' />
      <RadioButton name='name' label='O.O.N.I' value='four' />
    </RadioGroup>
  ))

storiesOf('Components/Molecules/Card', module)
  .add('Default', () => <Card />)
  .add('Many cards', () => <Flex flexWrap="wrap">
    <Box width={1 / 3}>
      <Card> Card 1 </Card>
    </Box>
    <Box width={1 / 3}>
      <Card onClick={() => alert('click')}> Clickable Variant </Card>
    </Box>
    <Box width={1 / 3}>
      <Card />
    </Box>
    <Box width={1 / 3}>
      <Card />
    </Box>
  </Flex>)
  .add('Clickable Card', () => (
    <Card onClick={() => alert('clicked')}>Clickable Card</Card>
  ))

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
  .add('With Icon upon error', () =>
    <InputWithIconButton icon={<MdVolumeMute />} error={'Please enter the value'} />
  )
  .add('With Clickable Icon', () =>
    <InputWithIconButton
      icon={<MdVolumeMute />}
      onAction={action('Clicked')}
      onChange={action('Changed')}
    />
  )

storiesOf('Components/Organisms/Hero', module)
  .add('Default', () => <Hero> This is a hero </Hero>)
  .add('Hero Lead', () => <HeroLead> This is a Hero Lead </HeroLead>)

storiesOf('Components/Organisms/Modal', module)
  .add('Default', () =>
    <Modal show={true}>
      <div>Modal Content</div>
    </Modal>
  )
  .add('With clickable Close Button', () =>
    <Modal show={true} closeButton='left' onHideClick={action('clicked')}>
      <Box p={3} bg='lightblue'>
        Modal Content
      </Box>
    </Modal>
  )

storiesOf('Layouts', module)
  .add('Default', () =>
    <Box bg='blue9'>
      <Container bg='blue1'>
        <Box bg='blue5'> Container </Box>
      </Container>
    </Box>
  )
