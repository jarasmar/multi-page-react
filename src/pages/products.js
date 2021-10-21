import React from 'react';
import  ProductsList from '../components/products_list'

function Products(props) {
    return (
        <div className="page products">
            <div className="header">Products</div>
            <ProductsList 
                products={ props.products } 
                onClick={ (item) => props.onClick(item) } 
            />
        </div>
    )
}

export default Products;