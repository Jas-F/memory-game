// Pseudo Code
// import react from react
// create components for each element on the page (nav, jumbotron, table, footer)
// create table/grid 3 col 4 row
// insert images into table/grid
// import images as seeds image
// add event listeners to images
// make conditional statements such as if pic id === pic id then loose game score = 0
// if pic id 1 !== pic id then shuffle images and increment score by 1

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
