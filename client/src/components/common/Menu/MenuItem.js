import React from "react";
//import { selectCartTotal } from "../../../redux/cart/cart.selector";

import { connect } from "react-redux";
import { useNavigate } from 'react-router';
import { createStructuredSelector } from "reselect";
import Product from '../../../pages/Products/Product'
import {
  cartAddItem,
  cartRemoveItem,
} from "../../../redux/cart/cart.action";
import { productSetItem } from "../../../redux/product/product.action"
import { selectProductItem } from '../../../redux/product/product.selector'
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../redux/cart/cart.selector";
import AddRemoveItemButton from "../AddRemoveItemButton/AddRemoveItemButton";

import "./MenuItem.css";


function MenuItem({ item, cartCount, cartList, cartAddItem, cartRemoveItem, productSetItem, setItem }) {
  const navigate = useNavigate();  

  const { id, name, price, vegan, description, image_url } = item;

  const handleItemQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
        const foundItemInCart = cartList.find((item) => item.id === id);
        
        if (foundItemInCart) {
          quantity = foundItemInCart.quantity;
        }
    }
    return quantity;
  };


  return (
    <div className="item">
      <img src={image_url} alt="item" onClick={()=>{
         setItem(item);
         navigate('/product');        
      }} />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        {/* <p className="head_desc-info">
          <small>{description}</small>
        </p> */}
        <button>Details</button>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">{price}</span>
        <AddRemoveItemButton quantity={handleItemQuantity()} 
                             handleAddItem={() => cartAddItem(item)} 
                             handleRemoveItem={() => cartRemoveItem(item)} />                                     
      </div>
    </div>
  );
 }

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  currentProduct: selectProductItem,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
  productSetItem: (item) => dispatch(productSetItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
