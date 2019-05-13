import React from 'react';
import Products from './componets/Products';
import Cart from './componets/Cart';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-grey-light flex flex-col items-center justify-center">
      <h1 className="text-grey-darker">React Shopping Cart</h1>
      <div className="flex mt-8" style={{ minWidth: 800 }}>
        <Products />
        <Cart />
      </div>
    </div>
  );
};

export default App;
