import React from 'react'
import Box from '@mui/material/Box';
import { Row, Col } from 'antd';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalDialog from '@mui/joy/ModalDialog';
import { Transition } from 'react-transition-group';
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
import { Unstable_Grid2 as Grid } from '@mui/material';



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

function MenuModal2({ item, open, handleClose, cartCount, cartList, cartAddItem, cartRemoveItem }) {
   
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
       <Transition in={open} timeout={400}>
        {(state) => (
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            componentsProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: 'none',
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                    entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                  }[state],
                },
              },
            }}
            sx={{
              visibility: state === 'exited' ? 'hidden' : 'visible',
            }}
          >
      {/* <Modal className='main'
        sx={{ minHeight: '10px', width: 10 }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >    */}
        <ModalDialog
              aria-labelledby="fade-modal-dialog-title"
              aria-describedby="fade-modal-dialog-description"
              sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
        
        <Box sx={style}>
          <Grid container spacing={3}>     
            <Grid xs={6}>
                <img className='modal_image' src={image_url} /> 
            </Grid>     
            <Grid xs={6}>  
                <Grid>   
                  <Typography id="modal-modal-title" variant="h4" component="h6">
                    {name}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                    Mixings: {description}
                  </Typography>   
                </Grid>
                <Grid>
                  <AddRemoveItemButton className="add-remove-button"
                                    quantity={handleItemQuantity()} 
                                    handleAddItem={() => cartAddItem(item)} 
                                    handleRemoveItem={() => cartRemoveItem(item)} /> 
                 </Grid>                                             
            </Grid>
          </Grid>   
        </Box>    
        </ModalDialog>    
      </Modal> 
      )}
      </Transition>
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


export default connect(mapStateToProps, mapDispatchToProps) (MenuModal2);