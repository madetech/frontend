import React from 'react';
import Logo from './Logo';
import LogoType from './LogoType';
import Nav from './Nav';
export default function Header({
  logoText,
  navLinks
}) {
  const logo = logoText ? React.createElement(LogoType, {
    text: logoText
  }) : React.createElement(Logo, null);
  return React.createElement("header", {
    className: "header"
  }, React.createElement("div", {
    className: "header__inner"
  }, React.createElement("div", {
    className: "navbar navbar-expand-lg p-0"
  }, React.createElement("div", {
    className: "navbar-brand mr-auto"
  }, logo), React.createElement("button", {
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