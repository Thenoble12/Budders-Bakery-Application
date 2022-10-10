// import React, { useEffect, useState } from 'react'

// function MenuData() {

//     const [ menuItems, setMenuItems ] = useState([])
//     const URL = "/products"  
  
//     useEffect(() => {
//       fetch(`${URL}`)               
//           .then((r) => r.json())
//           .then((productsData) => {setMenuItems(productsData)
//                                   console.log(menuItems)
//           })  
//     },[])  

//   return (
//     <div>MenuData</div>
//   )
// }

//export default MenuData

import { useEffect } from 'react'

function MenuData({ dataFetch }) {
    
    const URL = "/products"      
  
    useEffect(() => {
      fetch(`${URL}`)               
          .then((r) => r.json())
          .then((menuItems) => {dataFetch(menuItems)
                                  console.log(menuItems)
          })  
    },[])        
  
}

export default MenuData