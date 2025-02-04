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
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/joy/Chip';
import AddRemoveItemButton from "../AddRemoveItemButton/AddRemoveItemButton";

import "./MenuItem.css";
import { Unstable_Grid2 as Grid } from '@mui/material';
import { useNavigate } from 'react-router';



const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,    
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function MenuModal({ item, open, toggle, cartCount, cartList, cartAddItem, cartRemoveItem }) {
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
  const handleClose = (e, reason) => {
    // if (reason && reason == "backdropClick") 
    //   return;
    // e.stopImmediatePropagation()
    
    toggle(e)
  }

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
            <Box sx={style}>
      {/* <Modal className='main'
        sx={{ minHeight: '10px', width: 10 }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"


        >    */}
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={7}>
          <Grid  xs={4}>   
            <button className='modal_back_button' onClick={()=>handleClose()}>                    
              <FontAwesomeIcon icon={faLongArrowLeft} /> Back
            </button>
         </Grid>
         <Grid  xs={4}>
        <AddRemoveItemButton className="add-remove-button"
                                    quantity={handleItemQuantity()} 
                                    handleAddItem={() => cartAddItem(item)} 
                                    handleRemoveItem={() => cartRemoveItem(item)} /> 
        </Grid> 
        <Grid  xs={4}>   
          <button className='modal_checkout_button' onClick={()=>navigate('/cart')}>      
             Checkout <FontAwesomeIcon icon={faCartShopping} />
          </button>
         </Grid>                                 
        </Grid>                                    
      </CardActions>
    </Card>
    </Box>
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


export default connect(mapStateToProps, mapDispatchToProps) (MenuModal);