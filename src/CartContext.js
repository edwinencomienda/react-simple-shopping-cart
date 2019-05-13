import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = props => {
  const [products, setProducts] = useState([
    {
      id: Math.random(),
      name: 'Car',
      price: 200
    },
    {
      id: Math.random(),
      name: 'Airplane',
      price: 4324
    },
    {
      id: Math.random(),
      name: 'Jet',
      price: 43
    },
    {
      id: Math.random(),
      name: 'React Course',
      price: 32
    },
    {
      id: Math.random(),
      name: 'Vuejs Course',
      price: 3213
    },
    {
      id: Math.random(),
      name: 'Angular Course',
      price: 432
    }
  ]);
  const [cart, setCart] = useState([]);

  const handleAddToCard = product => {
    setCart([...cart, product]);
    setProducts(products.filter(p => p.id !== product.id));
  };

  const handleRemoveFromCart = product => {
    setProducts([...products, product]);
    setCart(cart.filter(p => p.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{ products, handleAddToCard, handleRemoveFromCart, cart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
