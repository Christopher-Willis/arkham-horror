import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Link} from "react-router-dom";


function CoreIntroNav() {
  return (
    <Container fluid id="" className="mb-4 mx-0 px-0"> 
        <Row className="w-100 text-center  m-0 align-items-stretch justify-content-between">
            <Col xs={"auto"} className="align-self-end p-0">
                <Link className="override " to={"/NewCampaign"}>
                    <div className="buttonlookalike px-2">
                        Back
                    </div>
                </Link>  
            </Col>
            <Col xs={"auto"} className="p-0 ">
                <Link className="override justify-content-end d-flex" to={"/campaign/core/setup"}>
                    <div className="buttonlookalike px-2 w-75">
                        Select Investigators
                    </div>
                </Link>
           </Col>
        </Row>
    </Container>
  )
}

export default CoreIntroNav;