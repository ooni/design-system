/* global describe, test, expect */
import 'jest-styled-components'
import React from 'react'

import toJson from 'enzyme-to-json'
import Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {
  Provider,
  theme,
  Input,
  Button,
  InputWithIconButton
} from '../components'

Enzyme.configure({ adapter: new Adapter() })

const shallowWithTheme = (el) => {
  // FIXME the following:
  // https://github.com/styled-components/jest-styled-components#theming doesn't
  // work with styled-components v4, because getChildContext() is replaced with
  // childContext(), but calling that function leads to other odd errors


  //The following workaround also doesn't work due to:
  //https://github.com/airbnb/enzyme/issues/1647
  const wrapper = shallow(
    <Provider theme={theme}>
      {el}
    </Provider>
  )
  return wrapper.dive({context: { theme }})
}

const renderJSON = el => toJson(shallow(el))

describe('Button', () => {
  test('renders', () => {
    const json = renderJSON(
      <Button theme={theme} />
    )
    expect(json.type).toBe('button')
  })
  test('render with width prop', () => {
    const json = renderJSON(
      <Button width={1} theme={theme} />
    )
    expect(json).toHaveStyleRule('width', '100%')
  })
})

describe('Input', () => {
  test('renders', () => {
    const json = renderJSON(
      <Input error='Some error' theme={theme} />
    )
    expect(json.type).toBe('div')
  })
})

describe('InputWithIconButton', () => {
  test('renders', () => {
    const json = renderJSON(
      <InputWithIconButton icon={<div />} theme={theme} />
    )
    expect(json.type).toBe('div')
  })
  test('render with onAction prop', () => {
    const json = renderJSON(
      <InputWithIconButton onAction={() => {}} icon={<div />} theme={theme} />
    )
    expect(json.type).toBe('div')
  })
})
