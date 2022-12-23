import React from "react";
import "./App.css";
const getTitle = () => "React";

function App() {
  const handleChange = event => {
    console.log(event.target.value);
  }
  return (
    <div>
      <h1> Hello {getTitle("React")} </h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <hr />
    </div>
  );
}
export default App;
