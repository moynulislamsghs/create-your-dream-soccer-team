import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import './PlayerDetails.css';

const PlayerDetails = (props) => {
    const {id, gender, full_name, last_name, img, email, market_value, nationality, position, price_value} = props.player;
    const [show, setShow] = useState(false);

    return (
        <div className='player-details-main'>
            <div className='player-details'>
                <img src={img} alt="" />
                <h3>{last_name}</h3>
                <Button variant="outline-info" onClick={() => setShow(true)}>More Info</Button>{' '}
                <Button variant="outline-success" onClick={()=>props.handleAddPlayers(props.player)} >Add Player</Button>{' '}
            </div>
            <Alert show={show} variant="success popup">
                <img src={img} alt="" />
                <Alert.Heading id='alertHeading'>{last_name}</Alert.Heading>
                <div className='popup-player-info'>
                    <h4>Full Name: {full_name}</h4>
                    <h4>Gender: {gender}</h4>
                    <h4>Position: {position}</h4>
                    <h4>Nationality: {nationality}</h4>
                    <h4>Market Value: {market_value}</h4>
                    <h4>Contact: {email}</h4>
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                <Button className='popup-close-btn' onClick={() => setShow(false)} variant="outline-success">
                    Close
                </Button>
                </div>
            </Alert>
        </div>
    );
};

export default PlayerDetails;