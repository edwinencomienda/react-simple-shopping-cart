import React from 'react';
import { CartContext } from '../CartContext';

const Products = () => {
  return (
    <CartContext.Consumer>
      {({ products, handleAddToCard }) => (
        <div className="w-full mr-4">
          <div className="py-6 mr-4">
            <h4>Products</h4>
          </div>
          {products.map(product => (
            <div
              key={product.id}
              className="p-6 bg-white rounded flex justify-between mb-3"
            >
              <div className="text-grey-darkest">
                <div className="mb-1">Name: {product.name}</div>
                <div>Price: {product.price}</div>
              </div>
              <button
                onClick={() => handleAddToCard(product)}
                className="bg-blue-light text-dark font-semibold p-3 rounded"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </CartContext.Consumer>
  );
};

export default Products;
