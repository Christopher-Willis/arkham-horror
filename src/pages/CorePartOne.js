import React,{useEffect,useState} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import UnderLine from '../assets/image/underline.png'
import MinusMark from '../assets/image/button_decrement.png'
import PlusMark from '../assets/image/button_increment.png'
import {useSelector,useDispatch} from 'react-redux'
import {addPhysicalTrama,addMentalTrama,addTotalXP,addSpentXP,addCampaignData} from '../redux/actions'
import cloneDeep from 'lodash/cloneDeep';
import {Link} from "react-router-dom"; 
import ChaosDrawModal from '../modals/ChaosDrawToken'
import CampaignLog from '../modals/CampaignLogModal'
import scenarioGathering from '../assets/scenario_card/theGathering.json'


function CorePartOne(props) {
    const CurrentGameName = useSelector(state => state.currentGame)
    const gameData = useSelector(state => state.games[CurrentGameName.gameName])
    const dispatch = useDispatch()
    const [usedXP, setUsedXP] = useState([])
    const [chaosModal,setChaosModal] = useState(false)
    const [campaignModal,setCampaignModal] = useState(false)

   
    // if there is no current game being played, go back to main page to select a game
    const isGame = () => {
        // current game is how we know a game is selected, without one, push back to main, this push log is how we control routes without react router on click events
        // and with our back button history disable code
        if(!CurrentGameName.gameName){
            console.log("Game Not Found: Redirect to main")
            props.history.push("/")
        }else{
            initilizeChars();            
        }
    }


    // to keep track of trama and XP, we will create object named physicalTrama, mentalTrama, etc in state
    // it will, in turn, have an array that corrisponds to the index of the investigator. So index 0 investigator in initial 
    // will corispond to 0 index in physicalTrama. However, to keep track of each scenario, instead of those values just being
    // numbers we tally, we will also store those into an array. Each scenario will sum that araay to get total values. This will
    // allow for more rigourus data tracker for users, we can, for instance, delete a campain and do it over and not mess up anything. 
    // any value that is being summed or decremented through the scenarios will use this method of array storage
    // EXAMPLE addTotalXP('game name',value of xp,index of investigator, index of mission)

    const initilizeChars = () => {

        gameData.investigators.initial.forEach((investigator,index) => {
            setUsedXP(new Array(gameData.investigators.initial.length).fill(0))
            dispatch(addPhysicalTrama(CurrentGameName.gameName,0,index,0))
            dispatch(addMentalTrama(CurrentGameName.gameName,0,index,0))
            dispatch(addCampaignData(CurrentGameName.gameName,[]))
            if(investigator.cardName === "Father Mateo"){
                dispatch(addTotalXP(CurrentGameName.gameName,5,index,0))
            }else{
                dispatch(addTotalXP(CurrentGameName.gameName,0,index,0))
            }
            dispatch(addSpentXP(CurrentGameName.gameName,0,index,0))
        });
    }

    const addUsedXP = (arrayIndex) => {
        if(usedXP[arrayIndex] < gameData["totalXP"][arrayIndex].reduce((a, b) => a + b, 0) - gameData["spentXP"][arrayIndex].reduce((a, b) => a + b, 0) ){
            const temp = cloneDeep(usedXP)
            temp[arrayIndex] += 1
            setUsedXP(temp)
        }

    }

    const minusUsedXP = (arrayIndex) => {
        if(usedXP[arrayIndex] > 0){
            const temp = cloneDeep(usedXP)
            temp[arrayIndex] = temp[arrayIndex] - 1
            setUsedXP(temp)
        }

    }

    useEffect(() => {
        // if someone comes in directly without selecting a game we need to test for that and redirect to homepage until a game is selected
        isGame();
    },[]);

    return(
        <Container id="home-container2" className="background-scroll">
            <Row>
                <Col>
                    <h1 className="spooky-text font-weight-bold mt-5 w-100 font-auto-size text-center">
                        Scenario 1: The Gathering
                    </h1>
                    <div className="buttonlookalike-disabled text-center small font-weight-bold">
                        Scenario Setup
                    </div>
                    <Image fluid src={UnderLine} />
                </Col>
            </Row>
            {
                // generates all our content for investigator stats. need to seperate this code out as it will be reused a lot
                gameData && gameData.investigators && gameData.physicalTrama ? gameData.investigators.initial.map( (investigator,index) => {
                    return (
                        <Container key={index}>
                            <Row>
                                <Col className="p-0">
                                     <p className="spooky-text text-uppercase font-weight-bold small m-1">
                                        {investigator.cardName}
                                     </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="arno-text2 m-1 font-weight-bold">
                                        Physical Trama:
                                    </p>
                                </Col>
                                <Col>
                                    <p className="arno-text2 m-1 font-weight-bold text-center ">
                                        {
                                            gameData["physicalTrama"][index].reduce((a, b) => a + b, 0)
                                        }
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="arno-text2 m-1 font-weight-bold">
                                        Mental Trama:
                                    </p>
                                </Col>
                                <Col>
                                    <p className="arno-text2 m-1 font-weight-bold text-center ">
                                        {
                                            gameData["mentalTrama"][index].reduce((a, b) => a + b, 0)
                                        }
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="arno-text2 m-1 font-weight-bold">
                                        Total XP:
                                    </p>
                                </Col>
                                <Col>
                                    <p className="arno-text2 m-1 font-weight-bold text-center ">
                                        {
                                            gameData["totalXP"][index].reduce((a, b) => a + b, 0)
                                        }
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="arno-text2 m-1 font-weight-bold">
                                        Available XP:
                                    </p>
                                </Col>
                                <Col>
                                    <p className="arno-text2 m-1 font-weight-bold text-center ">
                                        {
                                            gameData["totalXP"][index].reduce((a, b) => a + b, 0) - gameData["spentXP"][index].reduce((a, b) => a + b, 0)
                                        }
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="arno-text2 m-1 font-weight-bold">
                                        XP Spent:
                                    </p>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col className="px-0 m-0 align-items-start d-flex justify-content-end small-padding-top">
                                            <Image className="w-25 image-darken" src={MinusMark} onClick={()=>minusUsedXP(index)}/>                                    
                                        </Col>
                                        <Col className="px-0">
                                            <p className="arno-text2 m-1 font-weight-bold text-center ">
                                                {usedXP[index]}
                                            </p>
                                        </Col>
                                        <Col className="px-0 m-0 align-items-start d-flex small-padding-top " >
                                            <Image className="w-25 image-darken" src={PlusMark} onClick={()=>addUsedXP(index)}/>        
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>
                            <Image fluid src={UnderLine} />
                        </Container>
                    )
                }) : ""
            } 
            <Row>
                <Col className="pr-1">
                    <div className="text-uppercase buttonlookalike-disabled text-center small font-weight-bold py-2">
                        Add Side Story
                    </div>
                </Col>
                <Col className="pl-1">
                    <div className="text-uppercase buttonlookalike-disabled text-center small font-weight-bold py-2">
                        Edit Team
                    </div>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <div className="text-uppercase buttonlookalike text-center small font-weight-bold" onClick={()=> setChaosModal(true)}>
                        Chaos Bag
                    </div>
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <div className="text-uppercase buttonlookalike text-center small font-weight-bold" onClick={()=> setCampaignModal(true)}>
                        Campaign Log
                    </div>
                </Col>
            </Row>
            <Row className="my-3 ">
                <Col xs={"auto"} className="pr-1">
                    <Link to={process.env.PUBLIC_URL +"/"}>
                        <div className="text-uppercase buttonlookalike text-center small font-weight-bold px-1 py-2 ">
                            Main Menu
                        </div>
                    </Link>
                </Col>
                <Col className="pl-1">
                    <div className="text-uppercase buttonlookalike text-center small font-weight-bold px-1 py-2">
                        Scenario Resolution
                    </div>
                </Col>
            </Row>
            <ChaosDrawModal chaosDrawValue={chaosModal} setChaosModal={setChaosModal} scenarioCard={scenarioGathering}/>
            <CampaignLog campaignModal={campaignModal} setCampaignModal={setCampaignModal} title={"Night Of The Zealot"} campaignData={gameData["campaignLog"]} playerData={gameData["playerLog"]}/>
        </Container >
    )
}

export default CorePartOne;