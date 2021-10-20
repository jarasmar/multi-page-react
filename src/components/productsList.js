import React from 'react';
import Product from './product'

function ProductsList(props) {
    return (
        <ul className="products-list">
            <Product />
            <Product />
        </ul>
    )
}

export default ProductsList;