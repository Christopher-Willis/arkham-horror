
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header() {
  return (
    <div>
      <Container >
        <Row>
          <Col className="text-center mt-2">
          <h1 className="text-warning mt-2">
            Arkham Horror
          </h1>
          <p className="text-white mb-5">
            Campaign Guide
          </p>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Header;