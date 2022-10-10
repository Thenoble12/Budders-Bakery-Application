import React from 'react'
import MenuItem from './MenuItem';
import MenuData from './MenuData';
import './Menu.css';
 

function Menu({ setMenuItems, menuItems }) {  

  return (
    <div>
      <main>
         <MenuData dataFetch={setMenuItems} />
         { menuItems?.map((item) => (
          <MenuItem item={item} key={item.id} />
         )) }
      </main>
    </div>
  )
}

export default Menu