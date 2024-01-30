import playersData from '../../data/data.json';
import { useEffect, useState } from 'react';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import './Body.css';
import Cart from '../Cart/Cart';

const Body = () => {
    const [players, setPlayers] = useState(playersData);
    const [cart, setCart] = useState([]);

    const handleAddPlayers = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
        console.log(newCart);
    }


    return (
        <div className='body-container'>
            <div className='players-container'>
                {players.map(player => <PlayerDetails key={player.id} player={player} handleAddPlayers={handleAddPlayers}></PlayerDetails>)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Body;