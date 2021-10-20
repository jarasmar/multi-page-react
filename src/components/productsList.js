import React from 'react';
import Product from './product'

function ProductsList(props) {
    const products = props.products;
    const listProducts = products.map((product) => 
        <Product key={ product._id } product={ product } />
    )

    return (
        <ul className="products-list">
            { listProducts }
        </ul>
    )
}

export default ProductsList;