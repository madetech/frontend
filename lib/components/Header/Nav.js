import React from 'react';
export default function Nav({
  children
}) {
  return React.createElement("div", {
    className: "header_nav"
  }, React.createElement("nav", {
    className: "navbar-nav align-items-lg-center"
  }, children));
}