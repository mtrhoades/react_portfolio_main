// IMPORTS
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


// FUNCTIONAL COMPONENT
export default function NavBar() {
    // VANILLA JAVASCRIPT SECTION
    const navStyle = { backgroundColor: '#04151F', color: '#F3EFF5' }

    
    // JSX SECTION
  return (
    <div>
    <Navbar style={ navStyle } >
      <Container >
        <Navbar.Brand style={{ color: '#586994', fontSize: '30px', paddingLeft: '0px', paddingRight: '15rem' }} href="#home">MATTHEW RHOADES</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#about"><h4 className="linkText">About</h4></Nav.Link>
          <Nav.Link style={{ paddingLeft: '100px'}} href="#projects"><h4 className="linkText">Projects</h4></Nav.Link>
          <Nav.Link style={{ paddingLeft: '100px'}} href="#contact"><h4 className="linkText">Contact</h4></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  )
}


