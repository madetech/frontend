import React from 'react'

export default function TopBar () {
  return (
    <div className='top_bar'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div>
            Improving software delivery in every organisation
          </div>

          <nav>
            <a href='/blog'>Blog</a>
            <span className='space'></span>
            <a href='/careers'>Careers</a>
            <span className='space'></span>
            <a href='/contact'>Contact Us</a>
          </nav>
        </div>
      </div>
    </div>
  )
}
