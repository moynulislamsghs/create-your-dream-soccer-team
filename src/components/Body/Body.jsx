import playersData from '../../data/data.json';
import { useEffect, useState } from 'react';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import './Body.css';

const Body = () => {
    const [players, setPlayers] = useState(playersData);


    return (
        <div className='body-container'>
            <div className='players-container'>
                {players.map(player => <PlayerDetails key={player.id} player={player}></PlayerDetails>)}
            </div>
            <div id='playersInfoContainer'>
                <h1>name - ronaldo</h1>
            </div>
        </div>
    );
};

export default Body;