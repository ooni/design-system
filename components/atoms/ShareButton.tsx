import React, { FC, useMemo } from 'react'
import { FaTwitter, FaFacebook } from 'react-icons/fa'
import { Link, Button, ButtonProps } from 'rebass/styled-components'
import Text from './Text'

interface ITwitterShareButton {
  message: string
  url: string
  hashtags: string
  via: string
  inReplyTo: string
}

const TwitterShareButton: FC<ITwitterShareButton & ButtonProps> = props => {
  const { message, url, hashtags, via, inReplyTo, ...rest } = props

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
      <Button {...rest} variant="twitterShare">
        <FaTwitter />
        <Text as="span" pl={2}>
          Tweet
        </Text>
      </Button>
    </Link>
  )
}

interface IFacebookShareButton {
  url: string
}

const FacebookShareButton: FC<IFacebookShareButton & ButtonProps> = props => {
  const { url, ...rest } = props

  let href = 'https://www.facebook.com/sharer/sharer.php?'
  href += `&u=${encodeURIComponent(url)}`

  return (
    <Link href={href}>
      <Button {...rest} variant="facebookShare">
        <FaFacebook />
        <Text as="span" pl={2}>
          Share
        </Text>
      </Button>
    </Link>
  )
}

export { TwitterShareButton, FacebookShareButton }
