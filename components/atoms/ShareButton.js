import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, fontSize, fontSizeMult, color, width } from '../util'

import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook'

import { Link } from 'rebass'
import Button from '../Button'

export const StyledShareButton = styled(Button)`
  text-transform: none;

  ${fontSizeMult('paddingRight', 1)};
  ${fontSizeMult('paddingLeft', 1)};

  &:hover {
    filter: brightness(90%);
    ${color}
  }
  &:active {
    transition: .2s ease-in;
    filter: brightness(85%);
    ${color}
  }
`

export const StyledText = styled.span`
  ${space}
  ${width}
  ${fontSize}
  ${color}
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

TwitterShareButton.propTypes = {
  fontSize: PropTypes.number,
  message: PropTypes.string,
  url: PropTypes.string,
  hashtags: PropTypes.string,
  via: PropTypes.string,
  inReplyTo: PropTypes.string
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

FacebookShareButton.propTypes = {
  fontSize: PropTypes.number,
  url: PropTypes.string
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
