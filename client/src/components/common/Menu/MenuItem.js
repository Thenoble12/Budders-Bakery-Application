import React from "react";
//import { selectCartTotal } from "../../../redux/cart/cart.selector";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  cartAddItem,
  cartRemoveItem,
} from "../../../redux/cart/cart.action";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../redux/cart/cart.selector";
import AddRemoveItemButton from "../AddRemoveItemButton/AddRemoveItemButton";

import "./MenuItem.css";


function MenuItem({ item, cartCount, cartList, cartAddItem, cartRemoveItem }) {

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
      <img src={image_url} alt="item" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info">
          <small>{description}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">${price}</span>
        <AddRemoveItemButton quantity={handleItemQuantity()} 
                             handleAddItem={() => cartAddItem(item)} 
                             handleRemoveItem={() => cartRemoveItem(item)} />                                     
      </div>
    </div>
  );
 }

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
