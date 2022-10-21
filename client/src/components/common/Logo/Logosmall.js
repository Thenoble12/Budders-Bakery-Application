import React from 'react'
import logo from './RainbowBear.png';
import './Logosmall.css'

function Logosmall() {
  return (
    <div className='header-content_logo_sm'>
        <div>
            <img src={logo} alt='logo' />            
        </div>
  </div>
  )
}

export default Logosmall