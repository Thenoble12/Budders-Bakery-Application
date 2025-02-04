import React, { useState, useRef } from 'react'
import CartCountButton from '../../components/common/CartCountButton/CartCountButton'
import Footer from '../../components/common/Footer/Footer'
import Menu from '../../components/common/Menu/Menu'
import Banner from '../../components/Home/Banner/Banner'
import Navbar from '../../components/Navbar/Navbar'
import Register from '../Register/Register'

import './Home.css'

function Home({ setProduct }) {
  const menuRef = useRef();  

  const [ menuItemsData, setmenuItemsData ] = useState([])    

  const handleMenuScroll = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>   
        <Banner handleMenuScroll={handleMenuScroll} />
        <Menu setMenuItems={setmenuItemsData} menuItems={menuItemsData} setProduct={setProduct} />                      
    </div>
  )
}

export default Home