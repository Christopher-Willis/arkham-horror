import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CoreSetup() {
  return (
    <Container id="home-container" className="text-center background-scroll "> 
        <Row>
        <h1 className="spooky-text font-weight-bold mt-5 w-100 font-auto-size text-center">
            NIGHT OF THE ZEALOT
        </h1>
        </Row>
    </Container>
  )
}

export default CoreSetup;