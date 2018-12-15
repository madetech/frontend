import React from 'react'

const defaultLinks = [
  <a href='/blog'>Blog</a>,
  <a href='/careers'>Careers</a>,
  <a href='/contact'>Contact Us</a>
]

function withSpaces (links) {
  const reducer = (linksWithSpaces, link) => {
    return linksWithSpaces.concat(link, <span className='space'></span>)
  }

  return links.reduce(reducer, []).slice(0, -1)
}

export default function TopBar ({ children }) {
  return (
    <div className='top_bar'>
      <div className='top_bar__inner'>
        <div className='container'>
          <div className='d-flex justify-content-between'>
            <div>
              Improving software delivery in every organisation
            </div>

            <nav>
              {withSpaces(children || defaultLinks).map((link, i) => <span key={i}>{link}</span>)}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
