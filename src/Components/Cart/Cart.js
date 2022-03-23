import React from 'react';
import './Cart.css'
import Delete_icon from '../../images/delete.png'
import Arrow_icon from '../../images/arrow-right.png'

const Cart = ({count, totalPrice, totalShipping}) => {
  const taxAmmount = parseFloat((totalPrice * 0.1).toFixed(2));
  const grandTotal = totalPrice + totalShipping + taxAmmount;
  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <div className="order_details">
      Selected Items: {count} <br />
      Total Price: ${totalPrice} <br />
      Total Shipping Charge: ${totalShipping} <br />
      Tax: ${taxAmmount}<br />
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <button className='clear_btn'>Clear Cart <img src={Delete_icon} alt="" /></button>
      <button className='review_order'>Review Order <img src={Arrow_icon} alt="" /></button>
      </div>
    </div>
  );
};

export default Cart;