import React from 'react'
import ReactDOM from 'react-dom'
import Components from './components'

import './index.scss'
import './madetech-frontend.js'

function NavLinks () {
  return [
    <a href='/agile-transformation' className='nav-link'>
      Agile Team Transformation
    </a>,

    <a href='/software-development' className='nav-link'>
      Software Development
    </a>,

    <a href='/continuous-delivery' className='nav-link'>
      Continuous Delivery
    </a>,

    <a href='/devops' className='nav-link'>
      DevOps &amp;&nbsp;
      <br className='d-none d-lg-block' />
      Live Services
    </a>
  ]
}

function App () {
  return (
    <main>
      <Components.TopBar />
      <Components.Header navLinks={<NavLinks />} />
      <Components.Header logoText='Learn Tech' navLinks={<NavLinks />} />
    </main>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
