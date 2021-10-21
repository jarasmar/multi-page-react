import React from 'react';
import Button from './button';

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
                text='Order now'
                className='checkout'
                onClick={ props.handleCheckout }
            />
        </div>
    )
}

export default Checkout;