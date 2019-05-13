import React from 'react';
import Products from './componets/Products';
import Cart from './componets/Cart';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-grey-light flex flex-col items-center">
      <h1 className="text-grey-darker mt-10">React Shopping Cart</h1>
      <div
        className="lg:flex mt-8"
        style={{ maxWidth: 800, width: '100%', padding: '0 15px' }}
      >
        <Products />
        <Cart />
      </div>
    </div>
  );
};

export default App;
