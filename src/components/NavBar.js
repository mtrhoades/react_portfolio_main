// IMPORTS
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


// FUNCTIONAL COMPONENT
export default function NavBar() {
    // VANILLA JAVASCRIPT SECTION
    const navStyle = { backgroundColor: '#04151F' }

    
    // JSX SECTION
  return (
    <div>
    <Navbar style={ navStyle } variant="dark">
      <Container>
        <Navbar.Brand href="#home">MATTHEW RHOADES</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}


