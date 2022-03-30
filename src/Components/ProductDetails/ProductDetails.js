import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
  const {id} = useParams();

  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch('../../products.json')
    .then(res => res.json())
    .then(products => setProduct(products))
  },[]);

  const showProduct = products.find(product => product.id === id)
  return (
    <div className='single_product'>
    <div className="product_img">
      <img src={showProduct?.img} alt={showProduct?.name} />
    </div>
    <div className="product_details">
      <h4>{showProduct?.name}</h4>
      <h5>Price: ${showProduct?.price}</h5>
      <p>Manufacturer : {showProduct?.seller}, &nbsp; <small>Category: {showProduct?.category}</small> <br />
      <span className="rating">Rating: {showProduct?.ratings} start</span>, &nbsp;<small>Id: {showProduct?.id}</small><br />
      <small>Shipping: ${showProduct?.shipping}</small>, &nbsp;<small>Stock: {showProduct?.stock}</small>
      </p>
    </div>
 </div>
  );
};

export default ProductDetails;