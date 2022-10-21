import React from 'react';
import { useNavigate  } from 'react-router';
import './EmptyCart.css';
import emptyCartImg from './/BudderTheBear.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons'

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className='emptyCart'>
      <img src={emptyCartImg} alt='' />         
      <button onClick={() => navigate('/')}>
        {/* <i className='fas fa-long-arrow-alt-left'></i> Shop Now */}
        <FontAwesomeIcon icon={faLongArrowLeft} /> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;