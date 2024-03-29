import React, { useMemo } from 'react'
import { FaTwitter } from 'react-icons/fa'
import Link from './Link'
import Button, { ButtonProps } from './Button'
import Text from './Text'

export interface TwitterShareButtonProps extends ButtonProps {
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
    <Link href={twitterLinkGenerated}>
      <Button
        {...rest}
        variant="twitterShare"
        display="flex"
        alignItems="center"
      >
        <FaTwitter size={14} />

        <Text as="span" pl={2}>
          Tweet
        </Text>
      </Button>
    </Link>
  )
}

export default TwitterShareButton
