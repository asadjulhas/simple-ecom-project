
import React, { useEffect, useState } from 'react';
import Cart from '../Components/Cart/Cart';
import Product from '../Components/Product/Product';
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