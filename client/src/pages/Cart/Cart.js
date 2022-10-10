import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import EmptyCart from '../../components/Cart/EmptyCart'
import Footer from '../../components/common/Footer/Footer'
import Logo from '../../components/common/Logo/Logo'
import MenuCart from '../../components/common/Menu/MenuCart'
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from '../../redux/cart/cart.selector'
import './Cart.css'

function Cart({ cartCount, cartList, cartTotal }) {

  //const [ menuItemsData, setmenuItemsData ] = useState([])

  return (
    <div>
        <div className='cart-header'>
          <Logo />
        </div>
        { cartCount === 0 ? (
          <EmptyCart />
        ) : (
          <div className='orders'>
            <h1 className='orders-heading'>Your Orders</h1>
            <div className='orders-menu'>
              <MenuCart list={cartList} />
            </div>
            <h3 className='orders-total'>Your Total ${cartTotal}</h3>
        </div>
        )}
        <Footer />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);