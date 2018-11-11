import React from 'react'

import './_header_nav.scss'

export default function Nav () {
  return (
    <div className='header_nav'>
      <nav className='nav align-items-center'>
        <a href='/agile-transformation' className='ml-auto nav-link'>
          Agile Team<br />Transformation
        </a>

        <a href='/software-development' className='nav-link'>
          Software<br />Development
        </a>

        <a href='/continuous-delivery' className='nav-link'>
          Continuous<br />Delivery
        </a>

        <a href='/devops' className='nav-link'>
          DevOps
        </a>

        <a href='/support-and-maintainance' className='nav-link'>
          Support &amp;<br />Maintenance
        </a>
      </nav>
    </div>
  )
}
