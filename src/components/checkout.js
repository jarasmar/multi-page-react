import React from 'react';
import Button from './button';
import { Link } from 'react-router-dom';

function Checkout(props) {
    const basketItems = props.basket;
    let total = 0;
    basketItems.forEach(item => {
        total += (item.price * item.qty)
    });
    
    return (
        <div className="checkout-container">
            <div className="checkout-items">{ props.itemsCount } Item(s)</div>
            <div className="checkout-total">Total: £ { total }</div>
            <Button 
                text={<Link to='/thank-you'>Order Now</Link>}
                className='checkout'
                onClick={ props.clearAfterCheckout }
            />
        </div>
    )
}

export default Checkout;