import React from 'react'

export default function Hero ({ backgroundColour, children }) {
  return (
    <div className={`hero ${backgroundColour}`}>
      {children}
    </div>
  )
}