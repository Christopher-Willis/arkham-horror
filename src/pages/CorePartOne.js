import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import UnderLine from '../assets/image/underline.png'

function CorePartOne(props) {
    return(
        <Container id="home-container" className="background-scroll">
            <Row>
                <Col>
                    <h1 className="spooky-text font-weight-bold mt-5 w-100 font-auto-size text-center">
                        Scenario 1: The Gathering
                    </h1>
                    <div className="buttonlookalike text-center">
                        Scenario Setup
                    </div>
                    <Image fluid src={UnderLine} />
                </Col>
            </Row>
        </Container>
    )
}

export default CorePartOne;