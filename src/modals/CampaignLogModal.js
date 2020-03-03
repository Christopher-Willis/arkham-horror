import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function CampaignLog(props) {

    const dataRows = []

    if(!props.campaignData ||  props.campaignData.length === 0){
        dataRows[0] = [<p key="0" className="ml-3 arno-text2 font-weight-bold">Nothing to show.</p>]
    }else{
        
    }

    return(
        <Modal centered className="player-modal" show={props.campaignModal} onHide={() => props.setCampaignModal(false)}>
            <Modal.Header closeButton>
            <Modal.Title  className="spooky-text font-weight-bold w-100 text-center">Campaign Log</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {
                <Row>
                    <Col>
                        <h6 className="spooky-text font-weight-bold mb-3" >
                            {props.title}
                        </h6>
                    </Col>
                </Row>
                
            }   
            {dataRows}             
            </Modal.Body>
            {/* <Modal.Footer>
            <div className="buttonlookalike text-center px-2" variant="secondary" onClick={() => props.setCampaignModal(false)}>
                Close
            </div>
            <div className="buttonlookalike text-center px-2" variant="primary" onClick={() => {props.setCampaignModal(false);props.setChaosModal(true)}}>
                Save Changes
            </div>
            </Modal.Footer> */}
        </Modal>
    )
}

export default CampaignLog; 

