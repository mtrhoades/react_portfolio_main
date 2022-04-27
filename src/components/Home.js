// IMPORTS
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// FUNCTIONAL COMPONENT
export default function Home() {
    // VANILLA JAVASCRIPT SECTION
    const divWrapperStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' }


    // JSX SECTION
  return (
    <div style={divWrapperStyle}>
        <br></br>
        <h2>Full-Stack Software Engineer</h2>
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body style={divWrapperStyle}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button style={{width: '150px'}} variant="primary">Hire Me Today!</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
