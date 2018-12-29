import React from 'react'

function DefaultLinks () {
  return (
    <>
      <span className='top_bar__item'>
        <a href='/blog'>Blog</a>
      </span>

      <span className='top_bar__item'>
        <a href='/careers'>Careers</a>
      </span>

      <span className='top_bar__item'>
        <a href='/contact'>Contact Us</a>
      </span>
    </>
  )
}

function wrapItem (link) {
  return (
    <span className='top_bar__item'>
      {link}
    </span>
  )
}

export default function TopBar ({ children }) {
  return (
    <div className='top_bar'>
      <div className='top_bar__inner'>
        <div className='container'>
          <div className='row d-md-flex justify-content-center justify-content-md-between'>
            <div className='d-none d-md-block'>
              Improving software delivery in every organisation
            </div>

            <nav>
              {children ? React.Children.map(children, wrapItem) : <DefaultLinks />}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
