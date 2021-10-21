import React from 'react';

function QtyController(props) {
    return (
        <div className="qty-controller">
            <div className="qty-btn minus" onClick={ () => props.decreaseQty(props.product) }>-</div>
            <div className="product-qty">{props.qty}</div>   
            <div className="qty-btn plus" onClick={ () => props.increaseQty(props.product) }>+</div>
        </div> 
    )
}

export default QtyController;


