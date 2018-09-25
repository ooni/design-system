/* global describe, test, expect */
import 'jest-styled-components'
import React from 'react'

import toJson from 'enzyme-to-json'
import { mount, shallow } from 'enzyme'

import { ThemeProvider } from 'styled-components'

import {
  theme,
  Input,
  Button,
  InputWithIconButton
} from '../components'

import './config.js'

export const mountWithTheme = (el) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()

  return mount(el, {
    context,
    childContextTypes: ThemeProvider.childContextTypes,
  })
}

export const shallowWithTheme = (el) => {
  // FIXME for v4 the following:
  // https://github.com/styled-components/jest-styled-components#theming doesn't
  // work with styled-components v4, because getChildContext() is replaced with
  // childContext(), but calling that function leads to other odd errors
  //The following workaround also doesn't work due to:
  //https://github.com/airbnb/enzyme/issues/1647

  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()
  return shallow(el, { context })
}

export const renderJSON = el => toJson(mountWithTheme(el))
export const renderShallowJSON = el => toJson(shallowWithTheme(el))
