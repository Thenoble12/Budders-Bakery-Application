import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';
import FontAwesomeIcon from "@fortawesome/fontawesome-svg-core"

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className='emptyCart'>
      {/* <img src='https://merchlist.co/assets/emptycart.png' alt='' /> */}
      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
      <h1>TEST</h1>
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;