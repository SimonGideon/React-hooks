import React from "react";
import "./App.css";
const getTitle = () => "React";
class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abromov",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1> Hello {getTitle("React")} </h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <Echo />
      <List />
    </div>
  );
}

const List = () =>
  list.map((item) => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));

const Echo = () => {
  const Simon = new Developer("Simon", "Gideon");
  return <div>{Simon.getName()};</div>;
};
export default App;
