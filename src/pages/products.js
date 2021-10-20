import React from 'react';
import  ProductsList from '../components/productsList'

function Products() {
    return (
        <div className="page products">
            <div className="header">Products</div>
            <ProductsList />
        </div>
    )
}

export default Products;