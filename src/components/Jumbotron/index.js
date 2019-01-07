import React from 'react'

export default function Jumbotron ({ extraClassName, children }) {
  let className = 'jumbotron jumbotron-fluid'

  if (extraClassName) className += ` ${extraClassName}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}
