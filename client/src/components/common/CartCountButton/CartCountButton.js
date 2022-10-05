import React from 'react'
//import { useHistory } from 'react-router';
import './CartCountButton'

function CartCountButton({ cartCount }) {
  //const history = useHistory();  
  return (
    <div>
      
        <div className='btnCartCount' /*onClick={() => history.push('/cart')}*/>
            <div className='count'>
                {cartCount >= 100 ? '99+' : cartCount}
            </div>
            <i className='fas fa-shopping-cart'></i>
        </div>
    </div>
  )
}

export default CartCountButton