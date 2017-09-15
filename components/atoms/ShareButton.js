import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'
import { stylesToCss, styleMult } from '../util'

import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook'

import { Link } from 'rebass'
import Button from './Button'

export const StyledShareButton = Button.extend`
  text-transform: none;
  padding: 0 ${styleMult(fontSize, 1)};

  &:hover {
    filter: brightness(90%);
    ${stylesToCss(color)}
  }
  &:active {
    transition: .2s ease-in;
    filter: brightness(85%);
    ${stylesToCss(color)}
  }
`

export const StyledText = styled.span`
  ${stylesToCss(space)}
  ${stylesToCss(width)}
  ${stylesToCss(fontSize)}
  ${stylesToCss(color)}
`

StyledText.defaultProps = {
  pl: 2
}

const twitterBlue = '#1DA1F2'

export const TwitterShareButton = (props) => {
  const { message, url, hashtags, via, inReplyTo } = props

  let href = 'https://twitter.com/intent/tweet?'
  href += `text=${encodeURIComponent(message)}`
  if (url !== '') {
    href += `&url=${encodeURIComponent(url)}`
  }
  if (hashtags !== '') {
    href += `&hashtags=${encodeURIComponent(hashtags)}`
  }
  if (via !== '') {
    href += `&hashtags=${encodeURIComponent(via)}`
  }
  if (inReplyTo !== '') {
    href += `&in-reply-to=${encodeURIComponent(inReplyTo)}`
  }

  return (
    <Link href={href}>
      <StyledShareButton bg={twitterBlue}>
        <FaTwitter />
        <StyledText>Tweet</StyledText>
      </StyledShareButton>
    </Link>
  )
}

TwitterShareButton.defaultProps = {
  fontSize: 2,
  message: '',
  url: '',
  hashtags: '',
  via: '',
  inReplyTo: ''
}

const facebookBlue = '#3b5998'
export const FacebookShareButton = (props) => {
  const { url } = props

  let href = 'https://www.facebook.com/sharer/sharer.php?'
  href += `&u=${encodeURIComponent(url)}`
  return (
    <Link href={href}>
      <StyledShareButton bg={facebookBlue}>
        <FaFacebook />
        <StyledText>Share</StyledText>
      </StyledShareButton>
    </Link>
  )
}

FacebookShareButton.defaultProps = {
  fontSize: 2,
  url: '',
}


export const shareButtons = {
  TwitterShareButton,
  FacebookShareButton
}

export default shareButtons
