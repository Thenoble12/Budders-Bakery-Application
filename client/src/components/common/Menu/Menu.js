import React from 'react'
import MenuItem from './MenuItem';
import MenuData from './MenuData';
import './Menu.css';
 

function Menu({ setMenuItems, menuItems, setProduct }) {  

  return (
    <div>
      <main>
         <MenuData dataFetch={setMenuItems} />
         { menuItems?.map((item) => (
          <MenuItem item={item} key={item.id} setItem={setProduct}  />
         )) }
      </main>
    </div>
  )
}

export default Menu