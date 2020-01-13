
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header() {
  return (
      <Container fluid className="m-0 p-0">
        <Row>
          <Col className="text-center mt-2">
            <h1 className="text-warning mt-2 spooky-text">
              Arkham Horror
            </h1>
            <p className="text-white mb-5">
              Campaign Guide
            </p>
          </Col>
        </Row>
      </Container>
  )
}

export default Header;