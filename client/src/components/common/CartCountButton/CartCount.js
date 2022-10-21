import React from 'react'

function CartCount({ cartCount }) {
  return (
    <div className='count'>
        {cartCount >= 100 ? '99+' : cartCount}
    </div>
  )
}

export default CartCount