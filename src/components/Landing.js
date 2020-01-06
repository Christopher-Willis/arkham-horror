
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";

function Landing() {
  return (
      <Container fluid  className="text-center  h-100">
        <Row className="flex-column   h-100">
          <Col >
            <Link className="override p-2" to="/NewCampaign">New Game</Link>
          </Col>
          <Col className="">
            <Link className="override p-2" to="/">Load Game</Link>
          </Col>
          <Col className="text-center">
            <Link className="override p-2" to="/">Standalone Scenario</Link>
          </Col>
          <Col className="text-center">
            <Link className="override p-2" to="/">Chaos Bag</Link>
          </Col>
        </Row>
      </Container>
  )
}

export default Landing;