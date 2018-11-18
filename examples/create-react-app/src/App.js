import React from 'react'
import { Header } from '@madetech/frontend'
import '@madetech/frontend/dist/css/madetech-frontend.css'

export default function App () {
  return (
    <Header navLinks={[<a href='/'>Home</a>]} />
  )
}
