import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavBar(props) {
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Music Library</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
        </Navbar>
        </>
    )};

export default NavBar;