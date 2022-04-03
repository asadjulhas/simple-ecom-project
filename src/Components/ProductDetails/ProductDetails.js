import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import Cart from '../Cart/Cart'
import './ProductDetails.css'
import clearCart from '../../utilities/ClearCart';
import ReviewButton from '../../utilities/ReviewButton';
import { cartToLocalStorage } from '../../utilities/fakedb';

const ProductDetails = () => {
  const {id} = useParams();

  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch('../../products.json')
    .then(res => res.json())
    .then(products => setProduct(products))
  },[]);

  const showProduct = products.find(product => product.id === id);

 //Product select count
 const [cart, setCart, cartAlert] = useCart(products);

 // Event Handelar
 const addToCart = (product) => {
  let newCart = []
   const productExists = cart.find(exProduct => exProduct.id === product.id)
   if(productExists) {
     const rest = cart.filter(p => p.id !== productExists.id);
     productExists.quantity = productExists.quantity + 1;
     newCart = [...rest, productExists]
   } else {
     product.quantity = 1;
     newCart = [...cart, product]
   }
   setCart(newCart);
   cartToLocalStorage(product.id)
 }

  return (
    <div className="single_product_page">
      <div className='single_product'>
    <div className="product_img">
      <img src={showProduct?.img} alt={showProduct?.name} />
    </div>
    <div className="product_details">
      <h4>{showProduct?.name}</h4>
      <h5>Price: ${showProduct?.price}</h5>
      <p>Manufacturer : {showProduct?.seller}, &nbsp; <small>Category: {showProduct?.category}</small> <br />
      <span className="rating">Rating: {showProduct?.ratings} start</span>, &nbsp;<small>Id: {showProduct?.id}</small><br />
      <small>Shipping: ${showProduct?.shipping}</small>, &nbsp;<small>Stock: {showProduct?.stock}</small>
      </p>
    </div>
    <button className='de_add_to_cart' onClick={()=>addToCart(showProduct)}>Add to Cart &nbsp;<FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon></button>
 </div>
 <div className="cart_area">
 <Cart clearCart={()=>clearCart(setCart)} cart={cart} cartAlert={cartAlert}>
   <ReviewButton></ReviewButton>
 </Cart>
</div>
    </div>
  );
};

export default ProductDetails;