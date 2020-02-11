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
import nutralPic from '../assets/image/neutral.svg'
import checked from '../assets/image/checkbox_on_background.png'
import unchecked from '../assets/image/checkbox_off_background.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ChaosSetupModal from '../modals/ChaosSetupModal'
import ChaosBagData from '../assets/chaos_bag/core.json'
import {Link} from "react-router-dom";


function CoreSetup() {
    const CurrentGameData = useSelector(state => state.currentGame)
    const dispatch = useDispatch()
    const [selectedInvetigatorGroup,setSelectedInvetigatorGroup] = useState("guardian")
    const [currentTeam,setCurrentTeam] = useState([])
    const [teamModal, setTeamModal] = useState(false);
    const [chaosModal, setChaosModal] = useState(false);
    const [bagSelected, setBagSelected] = useState(1);


    const handleCloseTeam = () => setTeamModal(false);
    const handleShowTeam = () => setTeamModal(true);
    const handleCloseChaos = () => {
        setChaosModal(false);
    }
    const handleShowChaos = () => setChaosModal(true);


    const bagChange = (newBag) => {
        setBagSelected(newBag);
    }

    const investigatorChange = val => setSelectedInvetigatorGroup(val);
    const changeTeam = (investagorToAddOrRemove) => {
        const isSelected = currentTeam.findIndex((invesigatorItem)=>invesigatorItem.cardName===investagorToAddOrRemove)
        if(currentTeam.length < 4 && isSelected === -1 ){
            setCurrentTeam([...currentTeam,{"cardName":investagorToAddOrRemove}])
        }else if(isSelected > -1) {
            const tempState = currentTeam.slice(0)
            tempState.splice(isSelected,1)
            setCurrentTeam(tempState)
        }
    }
   

    const checkDisabledEnabled = (checkbox) => {
        const searched = currentTeam.find(inTeam => inTeam.cardName === checkbox)
        if(searched === undefined){
            return unchecked
        }else{
            return checked
        }
    }

    const uniqueInvestigatorList =
        InvestigatorList.reduce((accumulator, currentValue) => {
            if(accumulator.find(element => element.name === currentValue.name)){
                return accumulator
            }else{
                return [...accumulator,currentValue]
            }
    },[]) 

    return (
        <Container id="home-container" className="background-scroll position-relative"> 
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
                        <ToggleButton variant={selectedInvetigatorGroup === "neutral"? "faction-active" : "faction-inactive"}  value={"neutral"}>
                            <Image className="icon-size" src={nutralPic} fluid />            
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
                <Col className="">
                    <h6 className="spooky-text font-weight-bold">Select Investigators: </h6>
                    {uniqueInvestigatorList.map((InvestigatorCard,index) => {
                        if( InvestigatorCard.type_code && InvestigatorCard.type_code === "investigator" && InvestigatorCard.faction_code===selectedInvetigatorGroup){
                            return (
                                <Row key={index}>
                                    <Col xs={"auto"} onClick={()=>changeTeam(InvestigatorCard.name)} className=" d-flex align-items-center add-pointer">
                                        <Image className="icon-investigator" src={checkDisabledEnabled(InvestigatorCard.name)}/>
                                        <p className="arno-text2 mx-1 my-0 p-0 pt-1" >{InvestigatorCard.name}</p>
                                    </Col>
                                </Row>
                            )
                        }
                    })}
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <h6 className="spooky-text text-center font-weight-bold">Current Team:</h6>
                </Col>
            </Row>
            {currentTeam.map((member,index) => {
                return (
                    <Row key={index} className="justify-content-around my-1">
                        <Col>
                            <p className="arno-bold-text m-0 font-weight-bolder" key={index}>{member.cardName}</p>
                        </Col>   
                        <Col className="d-flex justify-content-end">
                        <p  style={{cursor: 'pointer'}} onClick={()=>handleShowTeam()} className="wolgasttwo-text m-0 line-98 text-right fit-content">
                            edit info
                        </p>
                        </Col> 
                    </Row>
                )
            })}
            <Row>
                <Col>
                    <div onClick={()=>handleShowChaos()} className="buttonlookalike text-center add-pointer mt-2">
                        Default Chaos Bag
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-between bottom mb-4 w-100">
                <Col xs={"auto"} className="d-flex align-items-end">
                    <Link to="/campaign/core/intro/">
                        <div className="buttonlookalike text-center add-pointer mt-2 px-2 ">
                            Back
                        </div>
                    </Link>
                    
                </Col>
                <Col xs={"auto"} >
                    <Link to="/campaign/core/TheGathering" className="justify-content-end d-flex">
                        <div className="buttonlookalike text-center add-pointer mt-2 px-2 w-75 ">
                            Start Campaign
                        </div>
                    </Link>
                </Col>
            </Row>
            <Modal centered className="player-modal" show={teamModal} onHide={handleCloseTeam}>
                <Modal.Header closeButton>
                <Modal.Title>Investigator</Modal.Title>
                </Modal.Header>
                <Modal.Body>Coming Soon</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTeam}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseTeam}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <ChaosSetupModal 
                chaosModalValue={chaosModal} 
                setChaosClose={() => handleCloseChaos()} 
                bagData={ChaosBagData} 
                bagSelected={bagSelected} 
                bagChange={(val) => bagChange(val)}
            />
            {/* <Modal centered className="player-modal" show={chaosModal} onHide={handleCloseChaos}>
                <Modal.Header closeButton>
                <Modal.Title>Default Chaos Bag</Modal.Title>
                </Modal.Header>
                <Modal.Body>Coming Soon</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseChaos}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseChaos}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal> */}
        </Container>
        
  )
}

export default CoreSetup;