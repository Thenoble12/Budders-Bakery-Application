import React, { forwardRef } from 'react'
import MenuItem from './MenuItem';
// import MenuData from './MenuData';
import './Menu.css';
 

const Menu = forwardRef(({ list }, ref) => (  
  <div>
    <main ref={ref}>       
       { list?.map((item) => (
        <MenuItem item={item} key={item.id} />
       )) }
    </main>
  </div>
))


export default Menu

