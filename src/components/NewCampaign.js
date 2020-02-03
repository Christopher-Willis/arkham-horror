import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, withRouter} from "react-router-dom";


const NewCampaign = (props) => {

    const [cardSets, setCardSets] = useState([]);
    const { history } = props;

    console.log(history)
    async function fetchData() {
        const res = await fetch("https://arkhamdb.com/api/public/packs/");
    res
      .json()
      .then(res => setCardSets(res))
    //   .catch(err => setErrors(err));
    }
    useEffect(() => {
        fetchData();
    },[]);

    return(
        <Container fluid  className="text-center h-75">
            <Row className="flex-column justify-content-around align-items-center h-100">
            {cardSets.map(coreAndMythos => {
                    if(coreAndMythos.position === 1 && coreAndMythos.cycle_position < 50){
                        return(
                        <Col xs={"auto"} key={coreAndMythos.code}>
                            <Link onClick={() => {history.push("/campaign/"+coreAndMythos.code+"/intro");}} className="override " to={"/campaign/"+coreAndMythos.code+"/intro"}>
                                <div className="buttonlookalike special-sizing">
                                    {coreAndMythos.code === "core" ? "Night of the Zealot" : coreAndMythos.name}
                                </div>
                            </Link>
                        </Col>)
                    }
                    return null
                })}
            </Row>
        </Container>
    );

}

export default withRouter(NewCampaign);