import React from 'react';
import './Product.css';
import cart_icon from '../../images/cart-plus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  // console.log(props.products.name)
  const {id, name, price, seller, ratings, img} = props.product;
  return (
    <div className='product'>
       <div className="product_img">
         <img src={img} alt={name} />
       </div>
       <div className="product_details">
         <h4>{name}</h4>
         <h5>Price: ${price}</h5>
         <p>Manufacturer : {seller} <br />
         <span className="rating">Rating : {ratings} start</span>
         </p>
       </div>
       <button onClick={()=>props.setCount(props.product)}>Add to Cart <img src={cart_icon} alt="" /></button>
       <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
    </div>
  );
};

export default Product;