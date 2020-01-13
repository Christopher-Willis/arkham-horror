import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Link} from "react-router-dom";


function CoreIntroNav() {
  return (
    <Container fluid id="" className="mb-4 mx-0 px-0"> 
        <Row className="w-100 text-center  m-0 align-items-stretch">
            <Col className="align-self-end ">
                <Link className="override " to={"/NewCampaign"}>
                    <div className="buttonlookalike p-1">
                        Back
                    </div>
                </Link>  
            </Col>
            <Col >
                <Link className="override " to={"/campaign/core/setup"}>
                    <div className="buttonlookalike p-1">
                        Select Investigators
                    </div>
                </Link>
           </Col>
        </Row>
    </Container>
  )
}

export default CoreIntroNav;