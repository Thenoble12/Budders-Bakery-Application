import React from 'react'
import logo from './RainbowBear.png';
import './logo.css'

function Logo() {
  return (
    <div className='header-content_logo'>
        <div>
            <img src={logo} alt='logo' />            
        </div>
        <p>
            <b>Budder’s Bakery</b>
        </p>
  </div>
  )
}

export default Logo