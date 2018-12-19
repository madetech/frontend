import React from 'react'
import Logo from './Logo'

function LogoTypeImitation ({ textWithoutSpaces }) {
  return (
    <div className='header_logo_type'>
      <div className='position-relative mr-3' style={{ top: '-2px' }}>
        <Logo width='162px' />
      </div>

      <span className='header_logo_type__text'>{textWithoutSpaces}</span>
    </div>
  )
}

function LogoTypeBy ({ textWithoutSpaces }) {
  return (
    <div className='header_logo_type--by'>
      <span className='header_logo_type__text'>{textWithoutSpaces}</span>
      <span className='px-3'>by</span>
      <Logo width='120px' />
    </div>
  )
}

export default function LogoType ({ by, text }) {
  const textWithoutSpaces = text.replace(' ', '\u200A')

  if (by === false) {
    return <LogoTypeImitation textWithoutSpaces={textWithoutSpaces} />
  } else {
    return <LogoTypeBy textWithoutSpaces={textWithoutSpaces} />
  }
}
