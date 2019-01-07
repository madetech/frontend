import React from 'react'
import { Navbar } from 'reactstrap'
import Logo from './Logo'
import LogoType from './LogoType'
import Nav from './Nav'

function HeaderLogo ({ logoBy, logoHref, logoText }) {
  const logo = logoText ? <LogoType by={logoBy} text={logoText} /> : <Logo />

  if (logoHref) {
    return (
      <div className='header__logo'>
        <a href={logoHref} className='header__logo_link'>{logo}</a>
      </div>
    )
  } else {
    return (
      <div className='header__logo'>
        {logo}
      </div>
    )
  }
}

export default function Header ({ constrainLinkWidth, children, logoBy, logoHref, logoText, scrollable }) {
  return (
    <header className='header'>
      <div className='header__inner'>
        <Navbar expand className='p-0 flex-column flex-lg-row'>
          <div className='navbar-brand mr-lg-auto'>
            <HeaderLogo
              logoBy={logoBy}
              logoHref={logoHref}
              logoText={logoText}
              />
          </div>

          <Nav constrainLinkWidth={constrainLinkWidth} scrollable={scrollable}>
            {children}
          </Nav>
        </Navbar>
      </div>
    </header>
  )
}
