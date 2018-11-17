import React from 'react'
import Logo from '../components/Header/Logo'

export default function LogoRenderer () {
  return (
    <div style={{ width: '160px' }}>
      <div className='header_logo_type'>
        <span className='header_logo_type__text' style={{ lineHeight: '1.3' }}>Frontend Styleguide</span>
      </div>

      <div class='d-flex align-items-center mt-2'>
        <span className="pr-2">by</span>

        <Logo width='100px' />
      </div>
    </div>
  )
}
