import React from "react";
// import react bootstrap
import { Navbar } from "react-bootstrap";

function Nav() {

    return (
    // add nav bar bootstrap
    <div>
    <Navbar bg="light">
        <Navbar.Brand>Clicky Game</Navbar.Brand>
    </Navbar>
    <Navbar bg="light">
        <Navbar.Brand>You Guessed -message based off user input</Navbar.Brand>
    </Navbar>
    <Navbar bg="light">
        <Navbar.Brand>Score: -incrimenting number | Top Score: -store highest incremented number</Navbar.Brand>
    </Navbar>
    </div>
    )
}

export default Nav;