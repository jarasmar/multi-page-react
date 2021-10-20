import React from 'react';

function Product(props) {
    return (
        <li>
            <span className="product-name">{ props.product.name }</span>
            <span className="product-price">£ { props.product.price }</span>
            <button className="buy-btn">Buy</button>
        </li>
    )
}

export default Product;