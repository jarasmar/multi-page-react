import React from 'react';

function QtyController(props) {
    return (
        <div className="qty-controller">
            <div className="qty-btn minus">-</div>
            <div className="product-qty">{props.qty}</div>   
            <div className="qty-btn plus">+</div>
        </div> 
    )
}

export default QtyController;


