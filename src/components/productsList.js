import React from 'react';

function ProductsList() {
    return (
        <ul className="products-list">
            <li>
                <span className="product-name">Product A</span>
                <button className="buy-btn">Buy</button>
            </li>
            <li>
                <span className="product-name">Product B</span>
                <button className="buy-btn">Buy</button>
            </li>
            <li>
                <span className="product-name">Product C</span>
                <button className="buy-btn">Buy</button>
            </li>
            <li>
                <span className="product-name">Product D</span>
                <button className="buy-btn">Buy</button>
            </li>
            <li>
                <span className="product-name">Product E</span>
                <button className="buy-btn">Buy</button>
            </li>
        </ul>
    )
}

export default ProductsList;