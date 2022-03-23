import React, { useEffect, useState } from 'react';
import Cart from '../Components/Cart/Cart';
import Product from '../Components/Product/Product';
import { cartTotalAmmount, shippingTotalAmmount } from '../utilities/CountPrice';
import {cartToLocalStorage, getStoredCart} from '../utilities/fakedb'
import './Shop.css'

const Shop = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(products => setProduct(products))
  },[]);

  //Product select count
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storeCards = getStoredCart();
    const saveCart = []
    for (const storeCard in storeCards) {
      const cartProducts = products.find(product => product.id === storeCard);
      if(cartProducts) {
        const quantity = storeCards[storeCard];
        cartProducts.quantity = quantity;
        saveCart.push(cartProducts)
      }
    }
    setCart(saveCart)
  },[products])

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
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop; 