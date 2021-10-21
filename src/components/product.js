import React from 'react';

function Product(props) {
    return (
        <li>
            <span className="product-name">{ props.product.name }</span>
            <span className="product-price">£ { props.product.price }</span>
            { props.qty ? <span className="product-price">Qty: {props.qty}</span> : '' }
            <button className="buy-btn" onClick={ () => props.onClick(props.product) }>{ props.button }</button>
        </li>
    )
}

export default Product;