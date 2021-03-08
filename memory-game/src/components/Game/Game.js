// import react and bootstrap
import React from "react";
import {Row, Col} from "react-bootstrap";

// create array of images from public folder
const IMG = ["cuban.jpg", "kieser.jpg", "kiyosaki.jpg", "musk.jpg"]
// create grid class with react component
class Game extends React.Component {
    // render images
    render() {
        return (
            // create grid layout 
            <container>
                <Row>
                    <Col>
                    123
                    </Col>
                </Row>
            </container>
    
        )
    }
}

export default Game;