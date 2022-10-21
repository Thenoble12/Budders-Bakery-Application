import { useEffect } from 'react'
import HandleError from '../../../HandleError';

function MenuData({ dataFetch }) {   
  
    useEffect(() => {
      fetch(`/products`)               
          .then((r) => r.json())
          .then((menuItems) => {dataFetch(menuItems)
                                  console.log(menuItems)
          })
          .catch((error) => {
            <HandleError error={error}/>
        });  
    },[])        
  
}

export default MenuData