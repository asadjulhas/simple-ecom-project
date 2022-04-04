
import React, { useEffect, useState } from 'react';
import Cart from '../Components/Cart/Cart';
import Product from '../Components/Product/Product';
import AddToCartFun from '../Hooks/AddToCartFun';
import useCart from '../Hooks/useCart';
import UseProducts from '../Hooks/UseProducts';
import clearCart from '../utilities/ClearCart';
import {cartToLocalStorage, getStoredCart} from '../utilities/fakedb'
import ReviewButton from '../utilities/ReviewButton';
import './Shop.css'

const Shop = () => {
  const [products, setProduct] = UseProducts();

  //Product select count
  const [cart, setCart, cartAlert] = useCart(products);

  // Event Handelar
  const addToCart = (product) => {
    AddToCartFun(product, cart, setCart);
  }


  // Search Handelar
  const [srProduct, setSrProduct] = useState([]);
  const [searchText, setSearchText] = useState('');
const searchProduct = (event) => {
  setSearchText(event.target.value.toLowerCase());
}
useEffect(() => {
   fetch('products.json')
   .then(res => res.json())
   .then(data => {
    const findSearch = data.filter(p => p.name.toLowerCase().includes(searchText));
    setSrProduct(findSearch)
   })
},[searchText])

  return (
    <div className='shop'>
      <div className="products_area">
      <input onChange={searchProduct} style={{marginTop: '20px', padding: '5px 8px'}} type="text" placeholder='Search product' />
      <div className="products">
        {srProduct.map(product => <Product key={product.id} setCount={addToCart} product={product}></Product>)}
        
      </div>
      </div>
      <div className="cart_area">
       <Cart clearCart={()=>clearCart(setCart)} cart={cart} cartAlert={cartAlert}>
      <ReviewButton></ReviewButton>
       </Cart>
      </div>
    </div>
  );
};

export default Shop; 