import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (product)=>{
    setCart((old)=> ({
      ...old,
      [product.cd_produto]: product,
    }));
  }

  const removeToCart = (index)=>{
    const filteredCart = cart.filter(
      (cartItem)=> cart.indexOf(cartItem) !== index
    );
    setCart(filteredCart);
  }
  const beijinho = "Beijinho em gatona";

  return(
    <CartContext.Provider value={ { beijinho } }>
      { children }
    </CartContext.Provider>
  );
}

export const useCart = ()=>{
  const cart = useContext(CartContext);
  return cart;
}