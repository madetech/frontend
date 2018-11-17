import React from 'react';
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
      class: "header__logo_link"
    }, logo);
  } else {
    return logo;
  }
}

export default function Header({
  logoHref,
  logoText,
  navLinks
}) {
  return React.createElement("header", {
    className: "header"
  }, React.createElement("div", {
    className: "header__inner"
  }, React.createElement("div", {
    className: "navbar navbar-expand-lg p-0"
  }, React.createElement("div", {
    className: "navbar-brand mr-auto"
  }, React.createElement(HeaderLogo, {
    logoHref: logoHref,
    logoText: logoText
  })), React.createElement("button", {
    className: "header__toggler d-lg-none",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNavDropdown",
    "aria-controls": "navbarNavDropdown",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, React.createElement("span", {
    className: "header__toggler_icon"
  })), React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNavDropdown"
  }, React.createElement("div", {
    className: "ml-auto"
  }, React.createElement(Nav, null, navLinks))))));
}