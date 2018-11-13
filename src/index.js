import React from 'react'
import ReactDOM from 'react-dom'
import Components from './components'

import './index.scss'
import './madetech-frontend.js'

function App () {
  return (
    <main>
      <Components.TopBar />
      <Components.Header />
    </main>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
