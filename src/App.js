import React from 'react';
import './App.css';
const title = 'React';

const getTitle = () => title;

function App() {
  return (
    <div>
      <h1> Hello {getTitle('React')} </h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
