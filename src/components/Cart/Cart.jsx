import React from 'react';
import './Cart.css';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {
    const cart = props.cart;

    let totalCost = 0;
    for(let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalCost += player.price_value;
    }

    return (
        <div id='playerCartSection'>
            <h3>Player Purchase Summary</h3>
            <h4>Total Player Added: {cart.length}</h4>
            <h4>Total Player Cost: {totalCost}M</h4>
            <div className="d-grid gap-2" style={{marginTop: "30px"}} >
                <Button variant="primary" size="lg">
                    View Added Player
                </Button>
            </div>
        </div>
    );
};

export default Cart;