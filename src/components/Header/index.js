import React from 'react'
import logo from '@madetech/marketing-assets/logos/made-tech-logo-colour.png'
import Nav from './Nav'

import 'bootstrap/js/dist/collapse'

export default function Header () {
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='navbar navbar-expand-lg p-0'>
          <div className='navbar-brand mr-auto'>
            <img alt='Made Tech' itemProp='logo' src={logo} width='200px' />
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
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
