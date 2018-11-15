import React from 'react'
import Logo from './Logo'

export default function LogoType ({ text }) {
  const textWithoutSpaces = text.replace(' ', '\u200A')

  return (
    <div class="d-flex align-items-center">
      <span class="header_logo_type__text">{textWithoutSpaces}</span>
      <span class="px-3">by</span>
      <Logo width='120px' />
    </div>
  )
}
