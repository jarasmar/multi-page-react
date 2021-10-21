import React from 'react';
import Product from './product';

function BasketList(props) {
    const basketProducts = props.basket;
    const listBasket = basketProducts.map((product) =>
        <Product 
            key={ product.id }
            product={ product }
            onClick={ props.onClick }
            button='Remove'
        />
    )
    return (
        <ul className="basket-list">
            { listBasket }
        </ul>
    )
}

export default BasketList;