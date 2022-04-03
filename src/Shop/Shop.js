
import React, { useEffect, useState } from 'react';
import Cart from '../Components/Cart/Cart';
import Product from '../Components/Product/Product';
import AddToCartFun from '../Hooks/AddToCartFun';
import useCart from '../Hooks/useCart';
import UseProducts from '../Hooks/UseProducts';
import clearCart from '../utilities/ClearCart';
import {cartToLocalStorage, getStoredCart} from '../utilities/fakedb'
import ReviewButton from '../utilities/ReviewButton';
import './Shop.css'

const Shop = () => {
  const [products, setProduct] = UseProducts();

  //Product select count
  const [cart, setCart, cartAlert] = useCart(products);

  // Event Handelar
  const addToCart = (product) => {
    AddToCartFun(product, cart, setCart);
  }


  return (
    <div className='shop'>
      <div className="products">
        {products.map(product => <Product key={product.id} setCount={addToCart} product={product}></Product>)}
        
      </div>
      <div className="cart_area">
       <Cart clearCart={()=>clearCart(setCart)} cart={cart} cartAlert={cartAlert}>
      <ReviewButton></ReviewButton>
       </Cart>
      </div>
    </div>
  );
};

export default Shop; 