import React from 'react'
import './CartCountButton.css'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartCount from './CartCount';

function CartCountButton({ cartCount }) {
  const navigate = useNavigate();  
  return (
    <div>      
        <div className='btnCartCount' onClick={() => navigate('/cart')}>
            { cartCount > 0 ? <CartCount cartCount={cartCount} /> : null }
            <div className='icon'>
              <FontAwesomeIcon icon={faShoppingCart} aria-hidden='true'/> 
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartCountButton);