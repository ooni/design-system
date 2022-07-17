import React, { FC } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { Button, ButtonProps, Link } from 'rebass/styled-components'
import Text from './Text'

export interface IFacebookShareButton extends ButtonProps {
  url?: string
}

const FacebookShareButton: FC<IFacebookShareButton> = (props) => {
  const { url = '', ...rest } = props

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

FacebookShareButton.defaultProps = {
  url: '',
}

export default FacebookShareButton
