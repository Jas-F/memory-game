// import react and bootstrap
import React from "react";
import { Row, Col } from "react-bootstrap";

// create array of images from public folder
const IMG = ["cuban.jpg", "kieser.jpg", "kiyosaki.jpg", "musk.jpg", "buffet.jpg", "cj.jpg", "ma.jpg", "pauly.jpg"]
// create grid class with react component
class Game extends React.Component {
    // build constructor with original state of image array and score

    constructor(props) {
        super(props)
        this.state = {
            clickedImages: [],
            score: 0,
            gameOver: false
        }
    }
    // render images
    render() {
        // suffle array when clicked and gameover = false
        var arrayToDisplay = shuffleArray(IMG)

        function shuffleArray(arr) {
            // grab array then sort the array using a math.random method
            // create sort function that compares the math. random number with a decimal
            // sort will try to compare each random element with a decemal which is close the math.randoms output returning a shuffled array of items
            arr.sort(() => Math.random() - .5);
            // return new array
            return arr
            

        }

        console.log(this.state)
        return (
            // create grid layout 
            // map over images
            <container>
                {/* create score */}
                <h1>Score:{this.state.clickedImages.length}</h1>
                {/* display game over when true */}
                {this.state.gameOver && <h1>Game Over</h1>}
                <Row className="gallery">
                    {/* {if the game is not over return images */}
                    {!this.state.gameOver &&
                        arrayToDisplay.map(item => {
                            return (
                                // return images
                                // add col size to display number of col bases on size
                                <div className="galleryImage">
                                    {/*  use back tick notation*/}
                                    {/* add onclick function for images being mapped */}
                                    {/* added memory-game to return images on local machine */}
                                    <img src={`/memory-game/Images/${item}`} onClick={() => {
                                        // push item array 
                                        // copy state and create new var
                                        // add images to it 
                                        // update state
                                        // add if statement to only allow first time clicked images to array
                                        if (this.state.clickedImages.includes(item)) {

                                            // set new state of score to 0 display game over
                                            let newState = { ...this.state }
                                            newState.gameOver = true
                                            newState.score = 0
                                            this.setState(newState)

                                        } else {
                                            // push to array
                                            let newState = { ...this.state }
                                            // newState.Score = {this.sts+ 1
                                            newState.clickedImages.push(item)
                                            this.setState(newState)
                                        }



                                    }}></img>
                                </div>

                            )
                        })}

                </Row>
            </container>

        )
    }
}

export default Game;