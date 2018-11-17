import React from 'react';
import logoSrc from '@madetech/marketing-assets/logos/made-tech-logo-colour.png';
export default function Logo({
  width
}) {
  return React.createElement("img", {
    alt: "Made Tech",
    itemProp: "logo",
    src: logoSrc,
    width: width || '200px'
  });
}