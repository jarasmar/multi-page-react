import React from 'react';
import  ProductsList from '../components/productsList'

function Products(props) {
    return (
        <div className="page products">
            <div className="header">Products</div>
            <ProductsList products={ props.products } />
        </div>
    )
}

export default Products;