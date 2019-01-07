import React from 'react'

export default function Nav ({ constrainLinkWidth, children, scrollable }) {
  let className = 'header_nav'

  if (constrainLinkWidth) className += ' constrain-link-width'
  if (scrollable) className += ' scrollable'

  return (
    <div className={className}>
      <div className='header_nav__inner'>
        <nav className='navbar-nav align-items-center'>
          {children}
        </nav>
      </div>
    </div>
  )
}
