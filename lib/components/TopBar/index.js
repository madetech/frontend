import React from 'react';
export default function TopBar() {
  return React.createElement("div", {
    className: "top_bar"
  }, React.createElement("div", {
    className: "top_bar__inner"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "d-flex justify-content-between"
  }, React.createElement("div", null, "Improving software delivery in every organisation"), React.createElement("nav", null, React.createElement("a", {
    href: "/blog"
  }, "Blog"), React.createElement("span", {
    className: "space"
  }), React.createElement("a", {
    href: "/careers"
  }, "Careers"), React.createElement("span", {
    className: "space"
  }), React.createElement("a", {
    href: "/contact"
  }, "Contact Us"))))));
}