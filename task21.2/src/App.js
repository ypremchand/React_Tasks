// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initial object in state
    this.state = {
      product: {
        name: 'Laptop',
        price: 1000,
        category: 'Electronics'
      }
    };
  }

  // Function to update the object's properties
  updateProduct = () => {
    this.setState(prevState => ({
      product: {
        ...prevState.product,
        price: 1200, // Update price
        category: 'Updated Electronics' // Update category
      }
    }));
  };

  render() {
    const { product } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Product Information</h1>
          <div>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>
          <button onClick={this.updateProduct}>Update Product</button>
        </header>
      </div>
    );
  }
}

export default App;
