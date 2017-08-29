import React from 'react'
import styled from 'styled-components'
import { connect } from 'refunk'
import Live from './Live'
import ReactMarkdown from 'react-markdown'
import Rebass, {
  Box,
  Heading,
  BlockLink,
  Link,
  NavLink,
  Code,
  Pre,
  Image
} from 'rebass'
import PageTitle from './PageTitle'
import { toggleXray, toggleLiveEditor } from './updaters'

const MDCode = props => (
  <Code
    color='blue'
    children={props.literal}
  />
)

const MDHeading = props => {
  if (props.level === 1) {
    return (
      <PageTitle {...props} />
    )
  }

  return (
    <BlockLink href={'#' + props.children}>
      <Heading
        {...props}
        id={props.children}
        mt={5}
        mb={2}
      />
    </BlockLink>
  )
}

const CodeBlock = (props) => {
  const { language, literal } = props
  if (!/\./.test(language)) {
    return (
      <Pre
        f={13}
        px={3}
        py={3}
        my={3}
        color='blue6'
        bg='gray0'>
        {literal}
      </Pre>
    )
  }

  const noInline = /\.\./.test(language) ? true : false

  return (
    <Box mb={3}>
      <Live
        code={literal}
        noInline={noInline}
      />
      <NavLink
        f={0}
        onClick={e => props.update(toggleXray)}
        children='X-Ray'
      />
      <NavLink
        f={0}
        onClick={e => props.update(toggleLiveEditor)}
        children='Code'
      />
    </Box>
  )
}

const MDImage = ({ src, title, alt}) => {
  const nameRegexp = /^\.\/images\/(.+?)\.svg/g
  const match = nameRegexp.exec(src)
  if (match) {
    const SVG = require('./images/' + match[1] + '.svg').default
    return (
      <SVG width="100%" />
    )
  }
  return (
    <Pre>
      ATTENTION: currently only relative (./images/foo.svg) SVG images are supported
    </Pre>
  )
}

const renderers = {
  CodeBlock: connect()(CodeBlock),
  Heading: MDHeading,
  Code: MDCode,
  Image: MDImage,
  Link
}

class Markdown extends React.Component {
  render () {
    return (
      <ReactMarkdown
        source={this.props.children}
        renderers={renderers}
      />
    )
  }
}

export default Markdown
