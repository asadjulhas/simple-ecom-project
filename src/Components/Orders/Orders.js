import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import Item from '../Item/Item'
import NotFound from '../NotFound/NotFound';
import './Orders.css'

const Orders = () => {
  
  const [products, setProduct] = useState([]);
  const getOrders = JSON.parse(localStorage.getItem('shopping-cart'));
  useEffect(() => {
  if(getOrders) {
    fetch('products.json')
    .then(res => res.json())
    .then(products => setProduct(products))
  }
},[]);

const [cart, setCart] = useState([]);
useEffect(() => {
let orderItems = []
for(const order in getOrders) {
 const orderProduct = products.find(product => product.id === order)
if(orderProduct) {
  const newQuantity = getOrders[order];
orderProduct.quantity = newQuantity
 orderItems.push(orderProduct)
  }
}
setCart(orderItems)
},[products]);

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