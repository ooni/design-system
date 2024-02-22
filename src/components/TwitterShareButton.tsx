import React, { useMemo } from 'react'
import { FaTwitter } from 'react-icons/fa'
import Button from './Button'

export interface TwitterShareButtonProps {
  message?: string
  url?: string
  hashtags?: string
  via?: string
  inReplyTo?: string
}

const TwitterShareButton = (props: TwitterShareButtonProps) => {
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
    <a href={twitterLinkGenerated}>
      <Button {...rest}>
        <FaTwitter size={14} />

        <span className="pl-2">Tweet</span>
      </Button>
    </a>
  )
}

export default TwitterShareButton
