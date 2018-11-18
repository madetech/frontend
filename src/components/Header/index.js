import React from 'react'
import { Collapse, Navbar, NavbarToggler } from 'reactstrap'
import Logo from './Logo'
import LogoType from './LogoType'
import Nav from './Nav'

function HeaderLogo ({ logoHref, logoText }) {
  const logo = logoText ? <LogoType text={logoText} /> : <Logo />

  if (logoHref) {
    return (
      <a href={logoHref} className='header__logo_link'>{logo}</a>
    )
  } else {
    return logo
  }
}

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
     isOpen: false
    }
  }

  toggle() {
    console.log('cool', !this.state.isOpen)
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
      <header className='header'>
        <div className='header__inner'>
          <Navbar expand='lg' className='p-0'>
            <div className='navbar-brand mr-auto'>
              <HeaderLogo logoHref={this.props.logoHref} logoText={this.props.logoText} />
            </div>

            <NavbarToggler className='header__toggler d-lg-none' onClick={this.toggle}>
              <span className='header__toggler_icon'></span>
            </NavbarToggler>

            <Collapse isOpen={this.state.isOpen} navbar>
              <div className='ml-auto'>
                <Nav>
                  {this.props.navLinks}
                </Nav>
              </div>
            </Collapse>
          </Navbar>
        </div>
      </header>
    )
  }
}
