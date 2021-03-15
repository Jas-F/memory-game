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
// how the game works
// create 2 arrays one names clicked
// if clicked push to array
// 2nd for loop that iterates through array
// if image is clicked & image is not array
// push to clicked array
// iterate score by 1
// if image is present in array display game over score = 0
// delete nav and footer because not in use

import React from "react";
import './App.css';
import Jumbo from "./components/Jumbotron/Jumbo";
import Game from "./components/Game/Game";


// return components onto application
function App() {
  return (
    <div className="App">
      <Jumbo />
      <Game />
    </div>
  );
}

export default App;
