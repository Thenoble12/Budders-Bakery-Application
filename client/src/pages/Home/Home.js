import React from 'react'
import CartCountButton from '../../components/common/CartCountButton/CartCountButton'
import Footer from '../../components/common/Footer/Footer'
import Menu from '../../components/common/Menu/Menu'
import Banner from '../../components/Home/Banner/Banner'
import './Home.css'

function Home() {
  return (
    <div>
        <Banner />
        <Menu />
        <Footer />
        <CartCountButton />
    </div>
  )
}

export default Home