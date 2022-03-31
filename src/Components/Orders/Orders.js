import React, { useEffect, useState } from 'react';
import useCart from '../../Hooks/useCart';
import UseProducts from '../../Hooks/UseProducts';
import Cart from '../Cart/Cart'
import Item from '../Item/Item'
import NotFound from '../NotFound/NotFound';
import './Orders.css'

const Orders = () => {
  const [products, setProduct] = UseProducts();
  const getOrders = JSON.parse(localStorage.getItem('shopping-cart'));

//Product select count
  const [cart, setCart] = useCart(products);

// CLear Cart
const clearCart = () => {
  localStorage.removeItem('shopping-cart')
  setCart([])
}
  return (
    <div className='order_page'>
      <div className="itemproduct">
      {
        cart.length > 0 ? cart.map((item, index) => <Item key={index} item={item}/>) : <h1>No item found</h1>
      }
      </div>
      <div className="cart_area">
       <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;