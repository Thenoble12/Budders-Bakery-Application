import React from 'react'
import bannerImg from './budders_banner.png'
import './Banner2.css';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Banner({ handleMenuScroll }) {
  return (
    <header>
        <div className='header-content'>           
            <div className='content-main'>  
                <h1>The best cookie you never had</h1>   
                <p>Made fresh using asian infused recipes with real natural ingredients.</p>
                <button onClick={handleMenuScroll}>
                    View Menu <FontAwesomeIcon icon={faArrowRightLong} />
                </button>     
            </div>
            {/* <div> */}
              <img src={bannerImg} alt='banner' className='header-img' />
            {/* </div> */}
        </div>
        
    </header>
  )
}

export default Banner