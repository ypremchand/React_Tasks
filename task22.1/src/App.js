import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', value: 10 },
    { id: 2, name: 'Item 2', value: 20 },
    { id: 3, name: 'Item 3', value: 30 }
  ]);
  const updateSecondItem = () => {
    const newItems = [...items];
    newItems[2] = { ...newItems[2], name: 'Updated Item 3', value: 300 };
    setItems(newItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Update Array of Objects</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name}: {item.value}
            </li>
          ))}
        </ul>
        <button onClick={updateSecondItem}>Update ID-3 Item</button>
      </header>
    </div>
  );
}

export default App;
