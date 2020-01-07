import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";


class NewCampaign extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cardSets: [],
    };

    }
    componentDidMount() {
        fetch("https://arkhamdb.com/api/" + "public/packs/")
        .then(response => response.json())
        .then(data => this.setState({ cardSets: data }));
        }

    state = {
        cardSets: null,
    };

    getSets() {
        return this.state.cardSets.map(coreAndMythos => {
            if(coreAndMythos.position === 1 && coreAndMythos.cycle_position < 50){
                console.log(coreAndMythos + "in if")
                return(
                    <Col xs={"auto"} className="">
                        <Link className="override " to={"/"+coreAndMythos.code}>
                        <div className="buttonlookalike">
                            {coreAndMythos.code == "core" ? "Night of the Zealot" : coreAndMythos.name}
                        </div>
                        </Link>
                    </Col>
                )
            }else{
                console.log(coreAndMythos + "in elseif")
                return 
            }
        })
    }

    render() {
        return(
            <Container fluid  className="text-center h-75">
                <Row className="flex-column justify-content-around align-items-center h-100">
                    {this.getSets()}
                </Row>
            </Container>
        );
    }


}
export default NewCampaign;