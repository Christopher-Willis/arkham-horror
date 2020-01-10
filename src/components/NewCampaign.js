import React, { useState,useEffect  } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";


function NewCampaign () {

    const [cardSets, setCardSets] = useState([]);

    async function fetchData() {
        const res = await fetch("https://arkhamdb.com/api/" + "public/packs/");
    res
      .json()
      .then(res => setCardSets(res))
    //   .catch(err => setErrors(err));
    }
    useEffect(() => {
        fetchData();
    });
    console.log(cardSets)
    return(
        <Container fluid  className="text-center h-75">
            <Row className="flex-column justify-content-around align-items-center h-100">
            {cardSets.map(coreAndMythos => {
                    if(coreAndMythos.position === 1 && coreAndMythos.cycle_position < 50){
                        console.log(coreAndMythos + "in if")
                    return(
                    <Col xs={"auto"} className="">
                        <Link className="override " to={"/campaign/"+coreAndMythos.code}>
                        <div className="buttonlookalike">
                            {coreAndMythos.code == "core" ? "Night of the Zealot" : coreAndMythos.name}
                        </div>
                        </Link>
                    </Col>)
                    }else{
                        console.log(coreAndMythos + "in elseif")
                        return 
                    }
                })}
            </Row>
        </Container>
    );

}
export default NewCampaign;