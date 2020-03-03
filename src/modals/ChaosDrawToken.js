// media assets
import plus1 from "../assets/image/token+1.png"
import zero from "../assets/image/token0.png"
import minus1 from "../assets/image/token-1.png"
import minus2 from "../assets/image/token-2.png"
import minus3 from "../assets/image/token-3.png"
import minus4 from "../assets/image/token-4.png"
import minus5 from "../assets/image/token-5.png"
import minus6 from "../assets/image/token-6.png"
import minus7 from "../assets/image/token-7.png"
import minus8 from "../assets/image/token-8.png"
import skull from "../assets/image/tokenskull.png"
import cultist from "../assets/image/tokencultist.png"
import autofail from "../assets/image/tokenautofail.png"
import eldar from "../assets/image/tokeneldar.png"
import thingy from "../assets/image/tokenthingy.png"
import tablets from "../assets/image/tokentablets.png"
import sealplus1 from "../assets/image/seal_token+1.png"
import sealzero from "../assets/image/seal_token0.png"
import sealminus1 from "../assets/image/seal_token-1.png"
import sealminus2 from "../assets/image/seal_token-2.png"
import sealminus3 from "../assets/image/seal_token-3.png"
import sealminus4 from "../assets/image/seal_token-4.png"
import sealminus5 from "../assets/image/seal_token-5.png"
import sealminus6 from "../assets/image/seal_token-6.png"
import sealminus7 from "../assets/image/seal_token-7.png"
import sealminus8 from "../assets/image/seal_token-8.png"
import sealskull from "../assets/image/seal_tokenskull.png"
import sealcultist from "../assets/image/seal_tokencultist.png"
import sealautofail from "../assets/image/seal_tokenautofail.png"
import sealeldar from "../assets/image/seal_tokeneldar.png"
import sealthingy from "../assets/image/seal_tokenthingy.png"
import sealtablets from "../assets/image/seal_tokentablets.png"
import checked from '../assets/image/checkbox_on_background.png'
import unchecked from '../assets/image/checkbox_off_background.png'
import underline from '../assets/image/underline.png'

import React, {useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import {addDifficulty} from '../redux/actions'

function ChaosDrawToken(props) {
    // all store data
    
    // the way we keep track of what game is loaded
    const CurrentGameData = useSelector(state => state.currentGame)
    // all games saved, used to make sure we don't duplicate game saves

    const allGames = useSelector(state => state.games)
    const dispatch = useDispatch()
    const [sealTokens,setSealTokens] = useState([])
    const [revealedTokens,setRevealedTokens] = useState([])
    const scenarioCardDifficulty =  useSelector(state => state.games[CurrentGameData.gameName]["chaosBag"]["difficulty"])
    
    
    const setScenarioCardDifficulty = (difficultyValues) => {
        dispatch(addDifficulty(CurrentGameData.gameName,difficultyValues))
    }
    
    const tokenUrlConverter = {
        "+1":plus1,
        "0":zero,
        "-1":minus1,
        "-2":minus2,
        "-3":minus3,
        "-4":minus4,
        "-5":minus5,
        "-6":minus6,
        "-7":minus7,
        "-8":minus8,
        "skull":skull,
        "cultist":cultist,
        "autofail":autofail,
        "eldar":eldar,
        "thingy":thingy,
        "tablets":tablets,
    }
    const sealtokenUrlConverter = {
        "+1":sealplus1,
        "0":sealzero,
        "-1":sealminus1,
        "-2":sealminus2,
        "-3":sealminus3,
        "-4":sealminus4,
        "-5":sealminus5,
        "-6":sealminus6,
        "-7":sealminus7,
        "-8":sealminus8,
        "skull":sealskull,
        "cultist":sealcultist,
        "autofail":sealautofail,
        "eldar":sealeldar,
        "thingy":sealthingy,
        "tablets":sealtablets,
    }

    const getCurrentActiveTokens = () => {
        return (revealedTokens.map( (revealedToken,indexRevealed)=> { 
            return (
                <Col xs={2} key={indexRevealed} className="px-1 height-revealed">
                    <Image fluid src={tokenUrlConverter[revealedToken]} />
                </Col>
            )})
        )
    }

    const setRevealToken = () => {
        if(allGames && allGames[CurrentGameData.gameName] && allGames[CurrentGameData.gameName]["chaosBag"] && allGames[CurrentGameData.gameName]["chaosBag"]["initial"] ){
            const activeChoasBag = [...allGames[CurrentGameData.gameName]["chaosBag"]["initial"]]
            // look through the seal token array and remove the first instance of every member found.
            sealTokens.forEach( (sealedToken,indexSealed)=>{
                activeChoasBag.splice(activeChoasBag.indexOf(sealedToken),1)
            })
            setRevealedTokens([activeChoasBag[Math.floor(Math.random() * Math.floor(activeChoasBag.length))]])
        }
    }

    const addRevealToken = (counter) => {
        let i;
        let tempRevealedTokens = [...revealedTokens]
        for (i = 0; i < counter; i++) {
            if(allGames && allGames[CurrentGameData.gameName] && allGames[CurrentGameData.gameName]["chaosBag"] && allGames[CurrentGameData.gameName]["chaosBag"]["initial"] && tempRevealedTokens.length + sealTokens.length < allGames[CurrentGameData.gameName]["chaosBag"]["initial"].length  ){
                const activeChoasBag = [...allGames[CurrentGameData.gameName]["chaosBag"]["initial"]]
                // look through the seal token array and remove the first instance of every member found.
                sealTokens.forEach( (sealedToken,indexSealed)=>{
                    activeChoasBag.splice(activeChoasBag.indexOf(sealedToken),1)
                })
                tempRevealedTokens.forEach( (revealedToken,indexRevealed)=>{
                    activeChoasBag.splice(activeChoasBag.indexOf(revealedToken),1)
                })
                tempRevealedTokens = [...tempRevealedTokens,activeChoasBag[Math.floor(Math.random() * Math.floor(activeChoasBag.length))]]
            }
        }
        // sets have to be at a top level domain, this is a bit more complicated code because of that. Temp has to be added while it summs it all together and makes checks for tokens that are already removed. 
        setRevealedTokens([...tempRevealedTokens])

        
    }


    const displaySealed = () => {
        const activeChoasBag = [...allGames[CurrentGameData.gameName]["chaosBag"]["initial"]]
        let tempSealed = [...sealTokens]
        console.log(tempSealed,"sealed tokens")
        const tempActiveChaosBag = activeChoasBag.map( (activeToken,indexActiveToken) => {

            if(tempSealed.indexOf(activeToken) === -1)
            {
                return (
                    <Col key={indexActiveToken} xs={1} className="m-0 p-0" onClick={() => setSealTokens([...sealTokens,activeToken])}>
                        <Image fluid src={tokenUrlConverter[activeToken]} />
                    </Col>
                )
            }else{
                tempSealed.splice(tempSealed.indexOf(activeToken),1)
                return (
                    <Col key={indexActiveToken} xs={1} className="m-0 p-0" onClick={() => deleteSealedToken(activeToken) } >
                        <Image fluid src={sealtokenUrlConverter[activeToken]} />
                    </Col>
                )

            }
        } )
        return tempActiveChaosBag
    }

    const deleteSealedToken = (activeToken) => {
        let tempSealed = [...sealTokens]
        tempSealed.splice(tempSealed.indexOf(activeToken),1)
        setSealTokens([...tempSealed])
    }

     return (
         <Modal centered scrollable show={props.chaosDrawValue} className="player-modal" onHide={() => props.setChaosModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title  className="spooky-text font-weight-bold w-100 text-center">Chaos Bag</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Row className="justify-content-center pb-2" onClick={()=>setRevealToken()}>
                    {getCurrentActiveTokens()}
                </Row>
                <Row className="justify-content-center">
                    <Col xs={"auto"} className="px-1" onClick={()=>setRevealToken()}>
                        <div className="buttonlookalike text-center px-2">
                            Draw Token
                        </div>
                    </Col>
                    <Col xs={"auto"} className="px-1" onClick={()=>addRevealToken(1)}>
                        <div className="buttonlookalike text-center px-2">
                            +1
                        </div>
                    </Col>
                    <Col xs={"auto"} className="px-1" onClick={()=>addRevealToken(2)}>
                        <div className="buttonlookalike text-center px-2">
                            +2
                        </div>
                    </Col>
                    <Col xs={"auto"} className="px-1" onClick={()=>addRevealToken(3)}>
                        <div className="buttonlookalike text-center px-2">
                            +3
                        </div>
                    </Col>
                    <Col xs={"auto"} className="px-1" onClick={()=>addRevealToken(5)}>
                        <div className="buttonlookalike text-center px-2">
                            +5
                        </div>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Image fluid src={underline} />
                </Row>
                <Row>
                    <Col>
                        <p className="spooky-text text-center font-weight-bold mb-1">
                            Sceanario Card
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-around">
                    {Object.keys(props.scenarioCard).map( (difficultyValues,indexDifficulty) => {
                        return (
                        <Col key={indexDifficulty} xs={"auto"} className="d-flex p-0" >
                            <Image onClick={()=>setScenarioCardDifficulty(difficultyValues)} className="icon-investigator" src={difficultyValues===scenarioCardDifficulty ? checked : unchecked}/>
                            <p onClick={()=>setScenarioCardDifficulty(difficultyValues)} className="text-center arno-text2 font-weight-bold text-capitalize small align-self-center mx-1 my-0 p-0 pt-1 align-self-center">{difficultyValues}</p>
                        </Col>
                        )
                    } )}
                </Row>
                {
                    Object.keys(props.scenarioCard[scenarioCardDifficulty]).map( (tokenName,indexToken) => {
                        return (
                            <Row key={indexToken} className="px-2">
                                <Col xs={1} className="m-0 p-0">
                                    <Image fluid src={tokenUrlConverter[tokenName]} />
                                </Col>
                                <Col xs={11} className="d-flex">
                                    <p className="text-left arno-text2 font-weight-bold text-capitalize small align-self-center mx-1 my-0 p-0 pt-1 align-self-center">
                                        {props.scenarioCard[scenarioCardDifficulty][tokenName]}
                                    </p>
                                </Col>
                            </Row>
                        )
                    })
                }
                <Row className="my-2">
                    <Image fluid src={underline} />
                </Row>
                <Row className="my-2">
                    <Col>
                        <p className="spooky-text text-center font-weight-bold mb-1">
                            Seal Tokens
                        </p>
                    </Col>
                </Row>
                <Row className="m-2 ">
                    {displaySealed()}
                </Row>
            </Modal.Body>
         </Modal>
     )
}

export default ChaosDrawToken;
