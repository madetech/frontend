import React from 'react'
import { Header } from '@madetech/frontend'
import '@madetech/frontend/all.scss'

export default function App () {
  return (
    <Header navLinks={[<a href='/'>Home</a>]} />
  )
}
