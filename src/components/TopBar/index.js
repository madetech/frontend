import React from 'react'

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
              Improving software delivery in public sector organisations
            </div>

            <nav>
              {React.Children.map(children, wrapItem)}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
