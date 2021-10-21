import React from 'react';

function Checkout(props) {
    return (
        <div className="checkout">
            <div className="checkout-items">{ props.basketQty } Item(s)</div>
            <div className="checkout-total">Total: £ 20</div>
            <button className="checkout-btn">Order Now</button>
        </div>
    )
}

export default Checkout;