import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import Button from './Button'
export interface FacebookShareButton {
  url?: string
}

const FacebookShareButton = ({ url = '', ...rest }: FacebookShareButton) => {
  let href = 'https://www.facebook.com/sharer/sharer.php?'
  href += `&u=${encodeURIComponent(url)}`

  return (
    <a href={href}>
      <Button {...rest}>
        <FaFacebook />
        <span className="pl-1">Share</span>
      </Button>
    </a>
  )
}

export default FacebookShareButton
