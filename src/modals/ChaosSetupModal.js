import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
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
import checked from '../assets/image/checkbox_on_background.png'
import unchecked from '../assets/image/checkbox_off_background.png'


// Setup for chaos bag modal: Please send me a state for the Modal's visibility, a way to close it, an array with an array with the name of the difficulty 
// and the values of that dificulty [{'Name': [ 'values', 'values']}, ], a default value to check (it's index in the sent array), and a way to return an index of the selection if changed 
// Example of chaos bag array send [{Easy : ["+1","+1","0","0","0","-1","-1","-1","-2","-2","skull","skull","cultist","tablets","autofail","eldar"]}, ...]

function ChaosSetupModal(props) {


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

    const [localBagSelected,setLocalBagSelected] = useState(props.bagSelected)

    const saveChaosBag = () => {
        props.bagChange(localBagSelected)
        props.setChaosClose()
    }

    const closeWithoutSave = () => {
        setLocalBagSelected(props.bagSelected)
        props.bagChange(props.bagSelected)
        props.setChaosClose()

    }



    return (

        <Modal centered className="player-modal" show={props.chaosModalValue} onHide={() => closeWithoutSave()}>
            <Modal.Header closeButton>
            <Modal.Title  className="spooky-text font-weight-bold w-100 text-center">Default Chaos Bag</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="justify-content-around">
                    {props.bagData.map((difficultyData,index) => {
                        return ( 
                            <Col onClick={() => setLocalBagSelected(index)} key={index} xs={"auto"} className="d-flex">
                                <Image className="icon-investigator" src={index===localBagSelected ? checked : unchecked}/>
                                <p className="arno-text2 mx-1 my-0 p-0 pt-1 align-self-center text-capitalize" >{difficultyData.difficulty}</p>
                            </Col>
                        )
                    } )}
                </Row>
                <Row className="mx-5 mt-3 justify-content-center">
                    { !props.bagData[localBagSelected] ? "" : props.bagData[localBagSelected].bag.map( (token,index) => {
                        return (
                            <Col xs={3} key={index}>
                                <Image fluid src={tokenUrlConverter[token]} />
                            </Col>
                        )
                    } )}
                </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => closeWithoutSave()}>
                Close
            </Button>
            <Button variant="primary" onClick={() => saveChaosBag()}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}


export default ChaosSetupModal;
