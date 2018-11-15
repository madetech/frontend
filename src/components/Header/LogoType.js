import React from 'react'
import Logo from './Logo'

export default function LogoType ({ text }) {
  const textWithoutSpaces = text.replace(' ', '\u200A')

  return (
    <div className='header_logo_type'>
      <span className='header_logo_type__text'>{textWithoutSpaces}</span>
      <span className='px-3'>by</span>
      <Logo width='120px' />
    </div>
  )
}
