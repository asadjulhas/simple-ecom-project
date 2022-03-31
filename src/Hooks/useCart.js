import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';
import UseProducts from './UseProducts';


const useCart = (products) => {
    //Product select count
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      const storeCards = getStoredCart();
      const saveCart = []
      for (const storeCard in storeCards) {
        const cartProducts = products.find(product => product.id === storeCard);
        if(cartProducts) {
          const quantity = storeCards[storeCard];
          cartProducts.quantity = quantity;
          saveCart.push(cartProducts)
        }
      }
      setCart(saveCart)
    },[products])
    return [cart, setCart]
  };

export default useCart;