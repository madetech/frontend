import React from 'react'
import Logo from '../components/Header/Logo'

export default function LogoRenderer () {
  return (
    <div className='header_logo_type' style={{ width: '160px' }}>
      <span className="header_logo_type__text">Frontend</span>

      <br />

      <div class='d-flex align-items-center'>
        <span className="pr-2">by</span>

        <Logo width='100px' />
      </div>
    </div>
  )
}
