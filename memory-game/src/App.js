// Pseudo Code
// import react from react
// create components for each element on the page (nav, jumbotron, table, footer)
// create table/grid 3 col 4 row
// insert images into table/grid
// import images as seeds image
// add event listeners to images
// randomize images
// make conditional statements such as if pic id === pic id then loose game score = 0
// if pic id 1 !== pic id then shuffle images and increment score by 1

import React from "react";
import './App.css';
import Nav from "./components/Nav/Navbar";
import Jumbo from "./components/Jumbotron/Jumbo";
import Game from "./components/Game/Game";


// return components onto application
function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Jumbo />
      <Game />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
