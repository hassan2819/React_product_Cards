import React from 'react';
import Productcard from './Productcard';
import products from './Data'; 
import './App.css';

const App = () => {
  return (
    <div className='card'
      
    >
      {products.map((product) => (
        <Productcard key={product.id} product={product} />
      ))}
    </div>
    
  );
};

export default App;
