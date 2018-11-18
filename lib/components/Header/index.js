import React from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap';
import Logo from './Logo';
import LogoType from './LogoType';
import Nav from './Nav';

function HeaderLogo({
  logoHref,
  logoText
}) {
  const logo = logoText ? React.createElement(LogoType, {
    text: logoText
  }) : React.createElement(Logo, null);

  if (logoHref) {
    return React.createElement("a", {
      href: logoHref,
      className: "header__logo_link"
    }, logo);
  } else {
    return logo;
  }
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    console.log('cool', !this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return React.createElement("header", {
      className: "header"
    }, React.createElement("div", {
      className: "header__inner"
    }, React.createElement(Navbar, {
      expand: "lg",
      className: "p-0"
    }, React.createElement("div", {
      className: "navbar-brand mr-auto"
    }, React.createElement(HeaderLogo, {
      logoHref: this.props.logoHref,
      logoText: this.props.logoText
    })), React.createElement(NavbarToggler, {
      className: "header__toggler d-lg-none",
      onClick: this.toggle
    }, React.createElement("span", {
      className: "header__toggler_icon"
    })), React.createElement(Collapse, {
      isOpen: this.state.isOpen,
      navbar: true
    }, React.createElement("div", {
      className: "ml-auto"
    }, React.createElement(Nav, null, this.props.navLinks))))));
  }

}