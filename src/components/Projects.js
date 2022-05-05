// IMPORTS
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// FUNCTIONAL COMPONENT
export default function Projects() {
    // VANILLA JAVASCRIPT SECTION
    const divWrapperStyle = { paddingTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }


    // JSX SECTION
  return (
    <div style={divWrapperStyle}>
        <h2>PROJECTS</h2>
        <CardGroup style={{ height: '18rem' }}>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Bug Tracker</Card.Title>
                    <Card.Text>
                    Create a bug-tracker app to show case.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Payroll Portal</Card.Title>
                    <Card.Text>
                    Create an app that uses a payroll portal for businesses.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>Crypto-Based Application</Card.Title>
                    <Card.Text>
                    Create crypto-based application to showcase here.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </div>
  )
}
