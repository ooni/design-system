import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import Button, { ButtonProps } from './Button'
import Link from './Link'
import Text from './Text'

export interface FacebookShareButton extends ButtonProps {
  url?: string
}

const FacebookShareButton = ({ url = '', ...rest }: FacebookShareButton) => {
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

export default FacebookShareButton
