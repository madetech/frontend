import React from 'react'

export default function Nav () {
  return (
    <div className='header_nav'>
      <nav className='navbar-nav align-items-lg-center'>
        <a href='/agile-transformation' className='nav-link'>
          Agile Team Transformation
        </a>

        <a href='/software-development' className='nav-link'>
          Software Development
        </a>

        <a href='/continuous-delivery' className='nav-link'>
          Continuous Delivery
        </a>

        <a href='/devops' className='nav-link'>
          DevOps
        </a>

        <a href='/support-and-maintainance' className='nav-link'>
          Support &amp; Maintenance
        </a>
      </nav>
    </div>
  )
}
