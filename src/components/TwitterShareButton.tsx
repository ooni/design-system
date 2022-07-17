import React, { FC, useMemo } from 'react'
import { FaTwitter } from 'react-icons/fa'
import { Link, Button, ButtonProps } from 'rebass/styled-components'
import Text from './Text'

export interface ITwitterShareButton extends ButtonProps {
  message?: string
  url?: string
  hashtags?: string
  via?: string
  inReplyTo?: string
}

const TwitterShareButton: FC<ITwitterShareButton> = (props) => {
  const {
    message = '',
    url = '',
    hashtags = '',
    via = '',
    inReplyTo = '',
    ...rest
  } = props

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

TwitterShareButton.defaultProps = {
  message: '',
  url: '',
  hashtags: '',
  via: '',
  inReplyTo: '',
}

export default TwitterShareButton
