
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";

function Landing() {
  return (
      <Container fluid  className="text-center h-75">
        <Row className="flex-column justify-content-around align-items-center h-100">
          <Col xs={"auto"} className="">
            <Link className="override" to="/NewCampaign">
            <div className="buttonlookalike">
              New Game
            </div>
            </Link>
          </Col>
          <Col xs={"auto"} className="">
            <Link className="override  " to="/">
            <div className="buttonlookalike">
              Load Game
            </div>
            </Link>
          </Col>
          <Col xs={"auto"} className="">
            <Link className="override  " to="/">
            <div className="buttonlookalike">
              Standalone Scenario
            </div>
            </Link>
          </Col>
          <Col xs={"auto"} className="">
            <Link className="override " to="/">              
              <div className="buttonlookalike">
                Chaos Bag
              </div>
            </Link>
          </Col>
          <Col xs={"auto"} className="">
            <Link className="override " to="/">
              <div className="buttonlookalike">
                Settings
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
  )
}

export default Landing;