import React from 'react';
import './Cart.css'
import Delete_icon from '../../images/delete.png'
import Arrow_icon from '../../images/arrow-right.png'

const Cart = ({count, totalPrice}) => {
  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <div className="order_details">
      Selected Items: {count} <br />
      Total Price: ${totalPrice} <br />
      Total Shipping Charge: $5 <br />
      Tax: $114<br />
      <h4>Grand Total: $1559</h4>
      <button className='clear_btn'>Clear Cart <img src={Delete_icon} alt="" /></button>
      <button className='review_order'>Review Order <img src={Arrow_icon} alt="" /></button>
      </div>
    </div>
  );
};

export default Cart;