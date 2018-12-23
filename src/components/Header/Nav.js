import React from 'react'

export default function Nav ({ constrainLinkWidth, children }) {
  return (
    <div className={`header_nav${constrainLinkWidth ? '--constrain-link-width' : ''}`}>
      <nav className='navbar-nav align-items-center'>
        {children}
      </nav>
    </div>
  )
}
