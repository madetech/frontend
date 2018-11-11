import React from 'react'
import ReactDOM from 'react-dom'
import Components from './components'

import './all.scss'

function App () {
  return (
    <main>
      <Components.Header />
    </main>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
