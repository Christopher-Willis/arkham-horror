import React,{useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import UnderLine from '../assets/image/underline.png'
import {useSelector} from 'react-redux'


function CorePartOne(props) {
    const CurrentGameName = useSelector(state => state.currentGame)
    const gameData = useSelector(state => state.games[CurrentGameName.gameName])
    console.log(gameData)
    const isGame = () => {
        if(!CurrentGameName.gameName){
            console.log("Game Not Found: Redirect to main")
            props.history.push("/")
        }
    }

    // if there is no current game being played, go back to main page to select a game
    useEffect(() => {
        isGame();
    },[]);

    return(
        <Container id="home-container2" className="background-scroll">
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