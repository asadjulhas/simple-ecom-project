import React from 'react';
import './Item.css'
import Delete_icon from '../../images/delete.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Item = ({item}) => {
  const shipping = item?.shipping * item?.quantity
  const totalPrice =  (item?.price * item?.quantity) + shipping;
  return (
    <div className='single_item'>
     <div className="pimag">
       <img width={30} src={item?.img} alt="" />
     </div>
     <div className="ptitle">
     <h4>{item?.name}</h4>
     <p>Price:  <span className='price'>${item?.price}</span>&nbsp; Shipping Charge: <span className='price'>${shipping}</span></p>
     <p>Quantity: {item?.quantity} &nbsp; Total: <span className='totalprice'>${totalPrice}</span></p>
     </div>
     <div className="dlbtn">
       <button><FontAwesomeIcon icon={faTrashCan} /></button>
     </div>
    </div>
  );
};

export default Item;