import React from 'react';

function Checkout(props) {
    const basketItems = props.basket;
    let total = 0;
    basketItems.forEach(item => {
        total += (item.price * item.qty)
    });
    
    return (
        <div className="checkout">
            <div className="checkout-items">{ props.basket.length } Item(s)</div>
            <div className="checkout-total">Total: £ { total }</div>
            <button className="checkout-btn">Order Now</button>
        </div>
    )
}

export default Checkout;