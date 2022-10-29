import React from "react";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import AspectRatio from '@mui/joy/AspectRatio';

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

// import { selectCartTotal } from "../../../redux/cart/cart.selector";

import { connect } from "react-redux";
import { useNavigate } from 'react-router';
import { createStructuredSelector } from "reselect";
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
import MenuModal from "./MenuModal";

function MenuItem2({ item, cartCount, cartList, cartAddItem, cartRemoveItem, productSetItem, setItem  }) {
  const navigate = useNavigate(); 
  
  const { id, name, price, vegan, description, image_url } = item;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  

  return (
    <Card sx={{ minHeight: '250px', width: 210 }}
          onClick={handleOpen}>
            <MenuModal item={item} open={open} handleClose={handleClose} cartCount={cartCount} cartList={cartList} cartAddItem={cartAddItem} cartRemoveItem={cartRemoveItem}  />
      <CardCover>
        <img
          src={image_url}
          // srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""          
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1} >
          {name}
        </Typography>
        <Typography
          //startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
          fontSize="lg" 
          textColor="#fff"
        >
          {price}
        </Typography>
        
      </CardContent>
    </Card>
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


export default connect(mapStateToProps, mapDispatchToProps)(MenuItem2);