import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import FaTwitter from 'react-icons/lib/fa/twitter'
import FaFacebook from 'react-icons/lib/fa/facebook'

import { Link } from 'rebass/styled-components'
import Button from '../Button'
import Text from './Text'

export const TwitterShareButton = ({ message, url, hashtags, via, inReplyTo, ...props }) => {

  const twitterLinkGenerated = useMemo(() => {
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

    return href
  }, [message, url, hashtags, via, inReplyTo])
  return (
    <Link href={twitterLinkGenerated}>
      <Button {...props} variant='twitterShare'>
        <FaTwitter />
        <Text as='span' pl={2}>Tweet</Text>
      </Button>
    </Link>
  )
}

export const FacebookShareButton = ({ url, ...props }) => {

  let href = 'https://www.facebook.com/sharer/sharer.php?'
  href += `&u=${encodeURIComponent(url)}`

  return (
    <Link href={href}>
      <Button {...props} variant='facebookShare'>
        <FaFacebook />
        <Text as='span' pl={2}>Share</Text>
      </Button>
    </Link>
  )
}

FacebookShareButton.propTypes = {
  url: PropTypes.string
}

export const shareButtons = {
  TwitterShareButton,
  FacebookShareButton
}

export default shareButtons
