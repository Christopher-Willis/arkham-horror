import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useSelector,useDispatch } from 'react-redux'
import {ChangeCurrentGame} from '../redux/actions'
import InvestigatorList from '../assets/card_data/investigators.json'

function CoreSetup() {
    const CurrentGameData = useSelector(state => state.currentGame)
    const dispatch = useDispatch()

    return (
        <Container id="home-container" className="background-scroll "> 
            <Row>
                <h1 className="spooky-text font-weight-bold mt-5 w-100 font-auto-size text-center">
                    NIGHT OF THE ZEALOT
                </h1>
            </Row>
            <Row>
                <Col>
                    <h6 className="arno-text font-weight-bold" >
                        {`Campaign Name: ` + CurrentGameData.name}
                    </h6>
                    <input 
                    className="wolgasttwo-text" 
                    placeholder="Enter Campaign Name Here"
                    value = {CurrentGameData.name}
                    onChange={e => dispatch(ChangeCurrentGame({name:e.target.value}))}
                    />
                </Col>                
            </Row>
            <Row className="mt-2 mb-0">
                <Col>
                    {InvestigatorList.map(InvestigatorCard => {
                        if( InvestigatorCard.type_code && InvestigatorCard.type_code === "investigator" && InvestigatorCard.faction_code==="guardian"){
                            return (
                            <p className="arno-text mb-1" key={InvestigatorCard.name}>
                                {InvestigatorCard.name}
                            </p>
                            )
                        }
                    })}
                </Col>
            </Row>

        </Container>
  )
}

export default CoreSetup;