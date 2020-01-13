import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CoreIntroText from '../components/CoreIntroText'
import CoreIntroNav from '../components/CoreIntroNav'

function CoreIntro() {
  return (
    <Container id="home-container" className="background-scroll"> 
        <Row className="flex-column justify-content-between align-items-center h-100">
          <Col xs={"auto"} className="w-100 ">
            <CoreIntroText/>
          </Col>
          <Col xs={"auto"} className="w-100">
            <CoreIntroNav/>
          </Col>
        </Row>

    </Container>
  )
}

export default CoreIntro;