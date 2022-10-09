import React, { useState } from 'react'
import CartCountButton from '../../components/common/CartCountButton/CartCountButton'
import Footer from '../../components/common/Footer/Footer'
import Menu from '../../components/common/Menu/Menu'
import Banner from '../../components/Home/Banner/Banner'

import './Home.css'

function Home() {

  const [ menuItemsData, setmenuItemsData ] = useState([])    

  return (
    <div>      
        <Banner />
        <Menu setMenuItems={setmenuItemsData} menuItems={menuItemsData} />
        <Footer />
        <CartCountButton />
    </div>
  )
}

export default Home