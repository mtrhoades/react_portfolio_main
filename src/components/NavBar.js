// IMPORTS
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


// FUNCTIONAL COMPONENT
export default function NavBar() {
    // VANILLA JAVASCRIPT SECTION



    // JSX SECTION
  return (
    <Navbar style ={{backgroundColor: '#04151F'}} variant="dark">
      <Container>
        <Navbar.Brand href="#home">Matthew Rhoades</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Projects</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

  )
}


