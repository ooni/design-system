import React from 'react'
import styled from 'styled-components'
import Live from './Live'
import ReactMarkdown from 'react-markdown'
import Rebass, {
  Box,
  Heading,
  BlockLink,
  Link,
  Code,
  Pre,
  Image
} from 'rebass'
import PageTitle from './PageTitle'

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

const CodeBlock = ({ language, literal }) => {
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
  CodeBlock,
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
