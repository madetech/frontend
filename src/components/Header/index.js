import React from 'react'
import Logo from './Logo'
import LogoType from './LogoType'
import Nav from './Nav'

export default function Header ({ logoText, navLinks }) {
  const logo = logoText ? <LogoType text={logoText} /> : <Logo />

  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='navbar navbar-expand-lg p-0'>
          <div className='navbar-brand mr-auto'>
            {logo}
          </div>

          <button
            className='header__toggler d-lg-none'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
            >
            <span className='header__toggler_icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <div className='ml-auto'>
              <Nav>
                {navLinks}
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
