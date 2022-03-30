import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import Item from '../Item/Item'

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
  return (
    <div className='shop'>
      <div className="itemproduct">
      {cart.map((item, index) => <Item key={index} item={item}/>)}
      </div>
      <div className="cart_area">
       {/* <Cart cart={cart}></Cart> */}
      </div>
    </div>
  );
};

export default Orders;