import React from 'react';
const defaultLinks = [React.createElement("a", {
  href: "/blog"
}, "Blog"), React.createElement("a", {
  href: "/careers"
}, "Careers"), React.createElement("a", {
  href: "/contact"
}, "Contact Us")];

function withSpaces(links) {
  const reducer = (linksWithSpaces, link) => {
    return linksWithSpaces.concat(link, React.createElement("span", {
      className: "space"
    }));
  };

  return links.reduce(reducer, []).slice(0, -1);
}

export default function TopBar({
  links
}) {
  return React.createElement("div", {
    className: "top_bar"
  }, React.createElement("div", {
    className: "top_bar__inner"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "d-flex justify-content-between"
  }, React.createElement("div", null, "Improving software delivery in every organisation"), React.createElement("nav", null, withSpaces(links || defaultLinks))))));
}