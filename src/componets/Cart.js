import React from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  return (
    <CartContext.Consumer>
      {({ cart, handleRemoveFromCart }) => (
        <div className="w-full mr-4">
          <div className="py-6 mr-4">
            <h4>Cart ({cart.length})</h4>
          </div>
          {cart.map(product => (
            <div
              key={product.id}
              className="p-6 bg-white rounded flex justify-between mb-3"
            >
              <div className="text-grey-darkest">
                <div className="mb-1">Name: {product.name}</div>
                <div>Price: {product.price}</div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(product)}
                className="bg-red-light text-dark font-semibold p-3 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </CartContext.Consumer>
  );
};

export default Cart;
