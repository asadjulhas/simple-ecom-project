import React from 'react';
import './Item.css'

const Item = ({item}) => {
  const totalPrice =  (item?.price * item?.quantity) + item?.shipping;
  return (
    <div className='single_item'>
     <div className="pimag">
       <img width={30} src={item?.img} alt="" />
     </div>
     <div className="ptitle">
     <h4>{item?.name}</h4>
     <p>Price:  <span className='price'>${item?.price}</span>&nbsp; Shipping Charge: <span className='price'>${item?.shipping}</span></p>
     <p>Quantity: {item?.quantity} &nbsp; Total: <span className='totalprice'>${totalPrice}</span></p>
     </div>
     <div className="dlbtn">
       <button>Del</button>
     </div>
    </div>
  );
};

export default Item;