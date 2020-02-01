import React, { useState }  from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Image from 'react-bootstrap/Image'
import {useSelector,useDispatch} from 'react-redux'
import {ChangeCurrentGame} from '../redux/actions'
import InvestigatorList from '../assets/card_data/investigators.json'
import gaurdianPic from '../assets/image/guardian.png'
import mysticPic from '../assets/image/mystic.png'
import roguePic from '../assets/image/rogue.png'
import seekerPic from '../assets/image/seeker.png'
import survivorPic from '../assets/image/survivor.png'
import Button from 'react-bootstrap/Button';

function CoreSetup() {
    const CurrentGameData = useSelector(state => state.currentGame)
    const dispatch = useDispatch()
    const [selectedInvetigatorGroup,setSelectedInvetigatorGroup] = useState("guardian")
    const [currentTeam,setCurrentTeam] = useState([])

    const investigatorChange = val => setSelectedInvetigatorGroup(val);
    const changeTeam = (investagorToAddOrRemove) => {
        setCurrentTeam([...currentTeam,{"cardName":investagorToAddOrRemove}])
    }


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
                    className="wolgasttwo-text camp-name-input" 
                    placeholder="Enter Campaign Name Here"
                    value = {CurrentGameData.name}
                    onChange={e => dispatch(ChangeCurrentGame({name:e.target.value}))}
                    />
                </Col>                
            </Row>
            <Row className="mt-2 mb-0">
                <Col xs={"auto"}>
                    <h6 className="spooky-text font-weight-bold">Faction: </h6>
                    <ToggleButtonGroup  name="investagor-selector" vertical type="radio" size="sm" value={selectedInvetigatorGroup} onChange={investigatorChange}>
                        <ToggleButton variant={selectedInvetigatorGroup === "guardian"? "faction-active" : "faction-inactive"}  value={"guardian"} >
                            <Image src={gaurdianPic} fluid />            
                        </ToggleButton>
                        <ToggleButton variant={selectedInvetigatorGroup === "mystic"? "faction-active" : "faction-inactive"}  value={"mystic"}>
                            <Image src={mysticPic} fluid />            
                        </ToggleButton>
                        <ToggleButton variant={selectedInvetigatorGroup === "rogue"? "faction-active" : "faction-inactive"} value={"rogue"}>
                            <Image src={roguePic} fluid />            
                        </ToggleButton>
                        <ToggleButton variant={selectedInvetigatorGroup === "seeker"? "faction-active" : "faction-inactive"} value={"seeker"}>
                            <Image src={seekerPic} fluid />            
                        </ToggleButton>
                        <ToggleButton variant={selectedInvetigatorGroup === "survivor"? "faction-active" : "faction-inactive"}  value={"survivor"}>
                            <Image src={survivorPic} fluid />            
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
                <Col className="">
                    <h6 className="spooky-text font-weight-bold">Select Investigators: </h6>
                    {InvestigatorList.map((InvestigatorCard,index) => {
                        if( InvestigatorCard.type_code && InvestigatorCard.type_code === "investigator" && InvestigatorCard.faction_code===selectedInvetigatorGroup){
                            return (
                                <Row key={index}>
                                    <Col className=" d-flex align-items-center">
                                        <input 
                                            type="checkbox" 
                                            id={InvestigatorCard.name} 
                                            value={InvestigatorCard.name} 
                                            onChange={() => changeTeam(InvestigatorCard.name)}
                                            />
                                        <label className="arno-text mb-0 pl-1 py-1 pt-2" for={InvestigatorCard.name}>{InvestigatorCard.name}</label>
                                    </Col>
                                </Row>
                            )
                        }
                    })}
                </Col>
            </Row>
        </Container>
  )
}

export default CoreSetup;