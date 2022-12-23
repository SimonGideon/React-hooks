import React from "react";
import "./App.css";
const getTitle = () => "React";
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

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
