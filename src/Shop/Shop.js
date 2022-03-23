import React, { useEffect, useState } from 'react';
import Cart from '../Components/Cart/Cart';
import Product from '../Components/Product/Product';
import { cartTotalAmmount } from '../utilities/fakedb';
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

  // Total price count
  const [totalPrice, setTotalPrice] = useState(0);

  // Event Handelar
  const addToCart = (product) => {
    // setCount(count+1);
    const newCart = [...cart, product]
    setCart(newCart);

    // Total price count
  const CountTotal = cartTotalAmmount(cart);
  setTotalPrice(CountTotal)
  }

  
  

  return (
    <div className='shop'>
      <div className="products">
        {products.map(product => <Product key={product.id} setCount={addToCart} product={product}></Product>)}
        
      </div>
      <div className="cart_area">
       <Cart count={cart.length} totalPrice={totalPrice}></Cart>
      </div>
    </div>
  );
};

export default Shop; 