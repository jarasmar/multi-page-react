import React from 'react';
import  BasketList from '../components/basketList'
import  Checkout from '../components/checkout'

function Basket(props) {
    return (
        <div className="page basket">
            <div className="header">Basket</div>
            <div className="content">
                <BasketList 
                    basket={ props.basket } 
                    onClick={ props.onClick }
                />
                <Checkout 
                    basket={ props.basket }
                />
            </div>
            
        </div>
    )
}

export default Basket;