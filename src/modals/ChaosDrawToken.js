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
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function ChaosDrawToken(props) {
    // all store data

    // the way we keep track of what game is loaded
    const CurrentGameData = useSelector(state => state.currentGame)
    // all games saved, used to make sure we don't duplicate game saves
    const allGames = useSelector(state => state.games)
    const dispatch = useDispatch()

    const [sealTokens,setSealTokens] = useState([])
    const [revealedTokens,setRevealedTokens] = useState([])

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
        // console.log("outside if")
        // console.log(allGames )

        // if(allGames && allGames[CurrentGameData.gameName] && allGames[CurrentGameData.gameName]["chaosBag"] && allGames[CurrentGameData.gameName]["chaosBag"]["initial"] ){
        //     console.log("inside if")
        //     const activeChoasBag = [...allGames[CurrentGameData.gameName]["chaosBag"]["initial"]]
        //     // look through the seal token array and remove the first instance of every member found.
        //     sealTokens.forEach( (sealedToken,indexSealed)=>{
        //         activeChoasBag.splice(activeChoasBag.indexOf(sealedToken),1)
        //     })
        //     revealedTokens.forEach( (revealedToken,indexRevealed)=> {
        //         activeChoasBag.splice(activeChoasBag.indexOf(revealedToken),1)
        //     })
        //     return activeChoasBag.map( (activeToken,indexActive)=> {
        //         return (
        //             <Col xs={1} key={indexActive} className="px-1">
        //                 <Image fluid src={tokenUrlConverter[activeToken]} />
        //             </Col>
        //         )
        //     })
        // }
        // return ""
        return (revealedTokens.map( (revealedToken,indexRevealed)=> { 
            return (
                <Col xs={2} key={indexRevealed} className="px-1">
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

    const addRevealToken = () => {
        if(allGames && allGames[CurrentGameData.gameName] && allGames[CurrentGameData.gameName]["chaosBag"] && allGames[CurrentGameData.gameName]["chaosBag"]["initial"] && revealedTokens.length < allGames[CurrentGameData.gameName]["chaosBag"]["initial"].length  ){
            console.log("inside if")
            const activeChoasBag = [...allGames[CurrentGameData.gameName]["chaosBag"]["initial"]]
            // look through the seal token array and remove the first instance of every member found.
            sealTokens.forEach( (sealedToken,indexSealed)=>{
                activeChoasBag.splice(activeChoasBag.indexOf(sealedToken),1)
            })
            revealedTokens.forEach( (revealedToken,indexRevealed)=>{
                activeChoasBag.splice(activeChoasBag.indexOf(revealedToken),1)
            })
            setRevealedTokens([...revealedTokens,activeChoasBag[Math.floor(Math.random() * Math.floor(activeChoasBag.length))]])
        }
    }

     return (
         <Modal centered scrollable show={props.chaosDrawValue} className="player-modal" onHide={() => props.setChaosModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title  className="spooky-text font-weight-bold w-100 text-center">Chaos Bag</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Row className="justify-content-center pb-2 min-height-revealed" onClick={()=>setRevealToken()}>
                    {getCurrentActiveTokens()}
                </Row>
                <Row className="justify-content-center">
                    <Col xs={3} className="px-1">
                        <div className="buttonlookalike text-center px-2 ">
                            Seal
                        </div>
                    </Col>
                    <Col xs={6} className="px-1" onClick={()=>setRevealToken()}>
                        <div className="buttonlookalike text-center px-2">
                            Draw Token
                        </div>
                    </Col>
                    <Col xs={3} className="px-1" onClick={()=>addRevealToken()}>
                        <div className="buttonlookalike text-center px-2">
                            +1
                        </div>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Image fluid src={underline} />
                </Row>
            </Modal.Body>
         </Modal>
     )
}

export default ChaosDrawToken;
