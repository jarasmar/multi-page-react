import React from 'react';
import QtyController from './qtyController';

function Product(props) {
    return (
        <li>
            <span className="product-name">{ props.product.name }</span>
            <span className="product-price">£ { props.product.price }</span>
            { props.qty ? 
                <QtyController qty={ props.product.qty } />
            : '' }
            <button className="buy-btn" onClick={ () => props.onClick(props.product) }>{ props.button }</button>
        </li>
    )
}

export default Product;