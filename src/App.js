import './App.css';

const title = 'React';

function App() {
  return (
    <div>
      <h1>Hello World {title} </h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
