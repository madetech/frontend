import React from 'react'

export default function Nav ({ children }) {
  return (
    <div className='header_nav'>
      <nav className='navbar-nav align-items-lg-center'>
        {children}
      </nav>
    </div>
  )
}
