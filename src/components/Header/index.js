import React from 'react'
import logo from '@madetech/marketing-assets/logos/made-tech-logo-colour.png'
import Nav from './Nav'

import 'bootstrap/scss/bootstrap.scss'
import './_header.scss'

export default function Header () {
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='col-md-3'>
          <img alt='Made Tech' itemProp='logo' src={logo} width='200px' />
        </div>

        <div className='col-md-9'>
          <Nav />
        </div>
      </div>
    </header>
  )
}
