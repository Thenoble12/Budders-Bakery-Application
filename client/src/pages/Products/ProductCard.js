import React from 'react';
import { createStructuredSelector } from 'reselect';
import Navbar from '../../components/Navbar/Navbar';
// import Link from 'next/link';
import { selectProductItem } from '../../redux/product/product.selector';
// import { urlFor } from '../lib/client';
import './ProductCard.css'

function ProductCard({ itemData }){

    const { id, name, price, vegan, description, image_url } = itemData;

  return (
    <div>  
        <div className="product-card">
          <img 
            src={image_url}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
          <p className='product-info'>{description}</p>
        </div>
        <p className='product-info'>{description}</p>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemData: selectProductItem
});

export default ProductCard