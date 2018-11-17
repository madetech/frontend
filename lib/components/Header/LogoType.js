import React from 'react';
import Logo from './Logo';
export default function LogoType({
  text
}) {
  const textWithoutSpaces = text.replace(' ', '\u200A');
  return React.createElement("div", {
    className: "header_logo_type"
  }, React.createElement("span", {
    className: "header_logo_type__text"
  }, textWithoutSpaces), React.createElement("span", {
    className: "px-3"
  }, "by"), React.createElement(Logo, {
    width: "120px"
  }));
}