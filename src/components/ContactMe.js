// IMPORTS
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// FUNCTIONAL COMPONENT
export default function ContactMe() {
    // VANILLA JAVASCRIPT SECTION
    const wrapperStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' }

    // JSX SECTION
  return (
    <div style = {wrapperStyle}>
        <h2>CONTACT ME</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Control type="subject" placeholder="Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control type="message" placeholder="Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}
