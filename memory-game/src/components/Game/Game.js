// import react and bootstrap
import React from "react";
import { Row, Col } from "react-bootstrap";

// create array of images from public folder
const IMG = ["cuban.jpg", "kieser.jpg", "kiyosaki.jpg", "musk.jpg"]
// create grid class with react component
class Game extends React.Component {
// build constructor with original state of image array and score

constructor(props) {
    super(props)
    this.state={
        clickedImages: [],
        score: 0
    }
}
    // render images
    render() {
        return (
            // create grid layout 
            // map over images
            <container>
                <Row>
                    {IMG.map(item => {
                        return (
                            // return images
                            <Col  >
                                {/*  use back tick notation*/}
                                {/* add onclick function for images being mapped */}
                                <img src={`/Images/${item}`} onClick={() => {
                                    // push item array 
                                    // copy state and insert
                                let newState = {...this.state}
                                newState.clicked

                                    console.log(item)
                                }}></img>
                            </Col>

                        )
                    })}

                </Row>
            </container>

        )
    }
}

export default Game;