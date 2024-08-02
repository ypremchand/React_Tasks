import React, { useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState({
    name: 'Laptop',
    price: 1000,
    stock: 50
  });
  const updateProduct = () => {
    setProduct(prevProduct => ({
      ...prevProduct,
      price: 1200,
      stock: 30
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Update Object Properties</h1>
        <div>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
        </div>
        <button onClick={updateProduct}>Update Price and Stock</button>
      </header>
    </div>
  );
}

export default App;
