import React from 'react'
import Links from './links'

const Footer = () => {
  return (
    <footer className="dark-background" >
      <div className="container" >
        <div>{<Links />}</div>
      </div>
    </footer>
  )
}

export default Footer
