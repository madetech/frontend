import React from 'react'

export default function Jumbotron ({ backgroundUrl, extraClassName, children }) {
  const props = {
    className: 'jumbotron jumbotron-fluid'
  }

  if (extraClassName) props.className += ` ${extraClassName}`
  if (backgroundUrl) props.style = { backgroundImage: `url(${backgroundUrl})` }

  return (
    <div {...props}>
      {children}
    </div>
  )
}
