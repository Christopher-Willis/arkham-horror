import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

// Setup for chaos bag modal: Please send me a state for the Modal's visibility, a way to close it, an array with an array with the name of the difficulty 
// and the values of that dificulty [{'Name': [ 'values', 'values']}, ], a default value to check (it's index in the sent array), and a way to return an index of the selection if changed 
// Example of chaos bag array send [{Easy : ["+1","+1","0","0","0","-1","-1","-1","-2","-2","skull","skull","cultist","tablets","autofail","eldar"]}, ...]

function chaosSetupModal(props) {
    return (
        <Modal centered className="player-modal" show={props.chaosModalValue} onHide={() => props.setChaosClose()}>
            <Modal.Header closeButton>
            <Modal.Title  className="spooky-text font-weight-bold w-100 text-center">Default Chaos Bag</Modal.Title>
            </Modal.Header>
            <Modal.Body>Coming Soon</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => props.setChaosClose()}>
                Close
            </Button>
            <Button variant="primary" onClick={() => props.setChaosClose()}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
}


export default chaosSetupModal;
