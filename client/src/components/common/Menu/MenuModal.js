import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./MenuModal.css"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
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



const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function MenuModal({ item, open, handleClose, cartCount, cartList, cartAddItem, cartRemoveItem }) {
   
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
    <div >
       {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal className='main'
      sx={{ minHeight: '10px', width: 10 }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img className='modal_image' src={image_url} />
          <Typography id="modal-modal-title" variant="h6" component="h6">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <AddRemoveItemButton quantity={handleItemQuantity()} 
                             handleAddItem={() => cartAddItem(item)} 
                             handleRemoveItem={() => cartRemoveItem(item)} /> 
        </Box>
      </Modal> 
    </div>
  )
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


export default connect(mapStateToProps, mapDispatchToProps) (MenuModal);